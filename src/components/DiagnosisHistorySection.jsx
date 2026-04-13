import BloodPressureChart from './BloodPressureChart';

function DiagnosisHistorySection({ chartData, diagnosisCards, latestDiagnosis }) {
  return (
    <section className="rounded-2xl bg-app-white p-4 shadow-card">
      <h2 className="mb-4 text-[32px] font-bold">Diagnosis History</h2>
      <BloodPressureChart chartData={chartData} latestDiagnosis={latestDiagnosis} />

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        {diagnosisCards.map((card) => (
          <article key={card.key} className={`rounded-xl p-4 ${card.bg}`}>
            <img src={card.icon} alt={card.title} className="mb-3 h-24 w-24" />
            <p className="text-[20px]">{card.title}</p>
            <p className="mb-2 text-[30px] font-extrabold">{card.value}</p>
            <div className="flex items-center gap-2 text-sm text-app-textMuted">
              {card.arrow ? <img src={card.arrow} alt="trend" className="h-2 w-2" /> : null}
              <span>{card.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DiagnosisHistorySection;
