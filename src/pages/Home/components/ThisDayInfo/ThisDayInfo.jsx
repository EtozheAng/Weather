import ThisDayIcon from './ThisDayIcon'
import s from './ThisDayInfo.module.scss'
const ThisDayInfo = () => {
  const items = [
    {
      icon_id: 'humidity',
      name: 'Влажность',
      value: '41%',
    },
    {
      icon_id: 'sunrise',
      name: 'Рассвет',
      value: '6:30',
    },
    {
      icon_id: 'uv-index',
      name: 'Уф-индекс',
      value: '0 of 10',
    },
    {
      icon_id: 'sunset',
      name: 'Закат',
      value: '19:30',
    },
  ]
  return (
    <div className={s.items}>
      {items.map((item) => (
        <ThisDayIcon key={item.icon_id} item={item} />
      ))}
    </div>
  )
}

export default ThisDayInfo
