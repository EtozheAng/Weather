import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'
const ThisDay = () => {
  return (
    <div className={s.this__day}>
      <div>
        <div className={s.this__icon}>
          <GlobalSvgSelector id="rain" />
        </div>
        <div className={s.this__temp}>10°</div>
        <div className={s.this__city}>
          <span>Tula</span>
        </div>
      </div>
      <div>
        <div className={s.this__time}>
          <span>7:30</span>
        </div>
        <div className={s.this__data}>
          <span>Закат</span>,<span>среда</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay
