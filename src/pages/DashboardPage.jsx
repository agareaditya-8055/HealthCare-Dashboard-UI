import { useMemo } from 'react';
import DiagnosticList from '../components/DiagnosticList';
import DiagnosisHistorySection from '../components/DiagnosisHistorySection';
import Header from '../components/Header';
import LabResults from '../components/LabResults';
import PatientProfileCard from '../components/PatientProfileCard';
import Sidebar from '../components/Sidebar';
import { useJessicaTaylorData } from '../hooks/useJessicaTaylorData';
import {
  getBloodPressureChartData,
  getDiagnosisCards,
  getDiagnosticList,
  getLabResults,
  getPatientProfile,
} from '../utils/patientTransformers';

function DashboardPage() {
  const { patient, isLoading, error } = useJessicaTaylorData();

  const profile = useMemo(() => getPatientProfile(patient), [patient]);
  const chartData = useMemo(
    () => getBloodPressureChartData(patient?.diagnosis_history ?? []),
    [patient],
  );
  const diagnosisCards = useMemo(() => getDiagnosisCards(patient?.diagnosis_history ?? []), [patient]);
  const diagnosticList = useMemo(() => getDiagnosticList(patient?.diagnostic_list ?? []), [patient]);
  const labResults = useMemo(() => getLabResults(patient?.lab_results ?? []), [patient]);
  const latestDiagnosis = patient?.diagnosis_history?.[patient.diagnosis_history.length - 1];

  if (isLoading) {
    return (
      <main className="min-h-screen bg-app-bg p-6">
        <div className="mb-6 h-20 animate-pulse rounded-full bg-app-white" />
        <div className="grid gap-6 xl:grid-cols-[367px_1fr_367px]">
          <div className="h-[700px] animate-pulse rounded-2xl bg-app-white" />
          <div className="h-[700px] animate-pulse rounded-2xl bg-app-white" />
          <div className="h-[700px] animate-pulse rounded-2xl bg-app-white" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid min-h-screen place-items-center bg-app-bg p-6">
        <div className="rounded-xl bg-app-white p-6 text-center shadow-card">
          <h1 className="mb-2 text-2xl font-bold">Could not load patient data</h1>
          <p className="text-app-textMuted">{error}</p>
        </div>
      </main>
    );
  }

  if (!patient || !profile) {
    return (
      <main className="grid min-h-screen place-items-center bg-app-bg p-6">
        <div className="rounded-xl bg-app-white p-6 text-center shadow-card">
          <h1 className="mb-2 text-2xl font-bold">Jessica Taylor not found</h1>
          <p className="text-app-textMuted">No matching patient was returned by the API.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-app-bg p-3 xl:p-5">
      <div className="mx-auto max-w-[1920px]">
        <Header />

        <div className="grid gap-6 xl:grid-cols-[367px_1fr_367px]">
          <Sidebar />

          <div className="space-y-6">
            <DiagnosisHistorySection
              chartData={chartData}
              diagnosisCards={diagnosisCards}
              latestDiagnosis={latestDiagnosis}
            />
            <DiagnosticList items={diagnosticList} />
          </div>

          <div className="space-y-6">
            <PatientProfileCard profile={profile} />
            <LabResults items={labResults} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
