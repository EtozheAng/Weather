import Card from './Card'
import s from './Days.module.scss'
import Chart from './Chart'
import moment from 'moment'
const Days = ({ weather }) => {
  const { time, temperature_2m_max, weathercode } = weather.daily
  const days = []
  function dateConversion(index = 0, date = 0) {
    switch (index) {
      case 0:
        return 'Сегодня'
      case 1:
        return 'Завтра'
      default:
        return moment(date).format('dd')
    }
  }
  time?.map((date, index) =>
    days.push({
      date: dateConversion(index, date),
    })
  )
  temperature_2m_max?.map(
    (temp, index) => (days[index].temp = Math.round(temp))
  )
  weathercode?.map((code, index) => (days[index].icon_id = code))

  return (
    <>
      <Chart />
      <div className={s.items}>
        {days.map((day) => (
          <Card key={day.date + day.temp} day={day} />
        ))}
      </div>
    </>
  )
}

export default Days
