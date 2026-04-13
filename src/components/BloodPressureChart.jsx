import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { memo, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function BloodPressureChart({ chartData, latestDiagnosis }) {
  const data = useMemo(
    () => ({
      labels: chartData.labels,
      datasets: [
        {
          label: 'Systolic',
          data: chartData.systolic,
          borderColor: '#C26EB4',
          backgroundColor: '#E66FD2',
          borderWidth: 3,
          tension: 0.38,
          pointRadius: 5,
          pointHoverRadius: 5,
        },
        {
          label: 'Diastolic',
          data: chartData.diastolic,
          borderColor: '#7E6CAB',
          backgroundColor: '#8C6FE6',
          borderWidth: 3,
          tension: 0.38,
          pointRadius: 5,
          pointHoverRadius: 5,
        },
      ],
    }),
    [chartData],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 200,
      animation: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#707070', font: { size: 14 } },
          border: { color: '#E3E4E6' },
        },
        y: {
          min: 60,
          max: 180,
          ticks: { stepSize: 20, color: '#707070', font: { size: 14 } },
          grid: { color: '#CBC8D4' },
          border: { color: '#E3E4E6' },
        },
      },
    }),
    [],
  );

  return (
    <div className="rounded-xl bg-app-purpleBg p-4">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-[22px] font-bold">Blood Pressure</h3>
        <div className="flex items-center gap-2 text-sm">
          Last 6 months
          <img src="/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg" alt="" className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_180px]">
        <div className="h-[260px]">
          <Line data={data} options={options} />
        </div>
        <div className="space-y-4">
          <div className="border-b border-app-purpleLine pb-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-app-magenta" />
              <p className="font-bold">Systolic</p>
            </div>
            <p className="text-[30px] font-bold">{latestDiagnosis?.blood_pressure?.systolic?.value ?? '--'}</p>
            <div className="flex items-center gap-2 text-sm text-app-textMuted">
              <img src="/assets/ArrowUp.svg" alt="up" className="h-2 w-2" />
              <span>Higher than Average</span>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-app-purple" />
              <p className="font-bold">Diastolic</p>
            </div>
            <p className="text-[30px] font-bold">{latestDiagnosis?.blood_pressure?.diastolic?.value ?? '--'}</p>
            <div className="flex items-center gap-2 text-sm text-app-textMuted">
              <img src="/assets/ArrowDown.svg" alt="down" className="h-2 w-2" />
              <span>Lower than Average</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BloodPressureChart);
