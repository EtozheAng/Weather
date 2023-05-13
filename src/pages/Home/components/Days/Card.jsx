import s from './Days.module.scss'
import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelector'
const Card = ({ day }) => {
  const { date, icon_id, temp } = day
  return (
    <div className={s.card}>
      <div className={s.day}>{date}</div>
      <div className={s.icon}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.temp}>{temp}</div>
    </div>
  )
}

export default Card
