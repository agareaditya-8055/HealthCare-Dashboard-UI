import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function BloodPressureChart({ chartData, latestDiagnosis }) {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Systolic',
        data: chartData.systolic,
        borderColor: '#C26EB4',
        backgroundColor: '#E66FD2',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: 'Diastolic',
        data: chartData.diastolic,
        borderColor: '#7E6CAB',
        backgroundColor: '#8C6FE6',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="rounded-xl bg-app-purpleBg p-4">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-[22px] font-bold">Blood Pressure</h3>
        <div className="text-sm">Last 6 months</div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_180px]">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#707070' } },
              y: { min: 60, max: 180, ticks: { stepSize: 20, color: '#707070' }, grid: { color: '#CBC8D4' } },
            },
          }}
          className="h-[260px]"
        />
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

export default BloodPressureChart;
