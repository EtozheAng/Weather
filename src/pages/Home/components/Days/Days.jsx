import Card from './Card'
import s from './Days.module.scss'
import Tabs from './Tabs'
import Chart from './Chart'
const Days = () => {
  const days = [
    {
      date: 'Сегодня',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Завтра',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Ср',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Чт',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Пт',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Сб',
      icon_id: 'sun',
      temp: '13°',
    },
    {
      date: 'Вс',
      icon_id: 'sun',
      temp: '13°',
    },
  ]
  return (
    <>
      <Tabs />
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
