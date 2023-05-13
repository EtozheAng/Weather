import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 30,
      },
    },
  }
  const labels = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Температура ',
        data: [12, 13, 13, 14, 15, 16, 14, 15, 16, 15, 17, 17, 18],
        borderColor: '#66afeb',
        backgroundColor: '#66afeb',
        tension: 0.5,
      },
    ],
  }

  return <Line width={675} options={options} data={data} />
}
