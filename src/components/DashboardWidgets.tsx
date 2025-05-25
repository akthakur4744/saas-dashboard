import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function DashboardWidgets() {
  // Dummy data
  const userStats = {
    labels: ['Users'],
    datasets: [{ label: 'Total Users', data: [120], backgroundColor: ['#6366f1'] }],
  };
  const sessionStats = {
    labels: ['Active', 'Inactive'],
    datasets: [{ data: [32, 88], backgroundColor: ['#10b981', '#f59e42'] }],
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col items-center">
        <span className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Total Users</span>
        <Bar data={userStats} options={{ plugins: { legend: { display: false } } }} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col items-center">
        <span className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Active Sessions</span>
        <Doughnut data={sessionStats} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col items-center">
        <span className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Projects</span>
        <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-4">8</span>
      </div>
    </div>
  );
}
