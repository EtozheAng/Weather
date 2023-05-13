import IndicatorSvgSelector from '../../../../assets/icon/indicator/IndicatorSvgSelector'
import s from './ThisDayInfo.module.scss'
const ThisDayIcon = ({ item }) => {
  const { icon_id, name, value } = item
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div>
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
      </div>
    </div>
  )
}

export default ThisDayIcon
