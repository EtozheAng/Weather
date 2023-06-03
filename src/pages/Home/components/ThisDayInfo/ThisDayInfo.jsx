import moment from 'moment'
import ThisDayIcon from './ThisDayIcon'
import s from './ThisDayInfo.module.scss'
const ThisDayInfo = ({ weather }) => {
  const { relativehumidity_2m } = weather.hourly
  const { sunrise, uv_index_max, sunset } = weather.daily
  const items = [
    {
      icon_id: 'humidity',
      name: 'Влажность',
      value: relativehumidity_2m[0] + '%',
    },
    {
      icon_id: 'sunrise',
      name: 'Рассвет',
      value: moment(sunrise[0]).format('HH:mm'),
    },
    {
      icon_id: 'uv-index',
      name: 'Уф-индекс',
      value: Math.round(uv_index_max[0]) + ' из 10',
    },
    {
      icon_id: 'sunset',
      name: 'Закат',
      value: moment(sunset[0]).format('HH:mm'),
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
