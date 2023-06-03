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
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

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
  const { weather } = useSelector((state) => state.currentWeatherSliceReducer)
  const {
    time,
    temperature_2m_max,
    precipitation_probability_max,
    windspeed_10m_max,
  } = weather.daily

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  }

  const data = {
    labels: time?.map((time) => moment(time).format('D MMM')),
    datasets: [
      {
        label: 'Температура, °C',
        data: temperature_2m_max,
        borderColor: '#f66049',
        backgroundColor: '#f66049',
        tension: 0.5,
      },
      {
        label: 'Вероятность осадков, %',
        data: precipitation_probability_max,
        borderColor: '#66afeb',
        backgroundColor: '#66afeb',
        tension: 0.5,
      },
      {
        label: 'Ветер, км/ч',
        data: windspeed_10m_max,
        borderColor: '#5e55ed',
        backgroundColor: '#5e55ed',
        tension: 0.5,
      },
    ],
  }

  return <Line width={675} height={210} options={options} data={data} />
}
