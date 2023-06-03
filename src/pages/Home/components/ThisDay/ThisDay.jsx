import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'
import moment from 'moment'
import Moment from 'react-moment'
import 'moment/locale/ru'
const ThisDay = ({ weather, city }) => {
  moment().locale('ru')
  const { weathercode, temperature, is_day } = weather.current_weather
  return (
    <div className={s.this__day}>
      <div className={s.this__temp_wrap}>
        <div className={s.this__icon}>
          <GlobalSvgSelector
            id={!is_day && weathercode < 3 ? weathercode + '.1' : weathercode}
          />
        </div>
        <div className={s.this__temp}>
          <span>{Math.round(temperature) + '°'}</span>
        </div>
        <div className={s.this__city}>
          <span>{city}</span>
        </div>
      </div>
      <div className={s.this__item}>
        <div className={s.this__time}>
          <span>
            <Moment format="HH:mm" interval={1000} />
          </span>
        </div>
        <div className={s.this__date}>
          <span>
            <Moment format="D MMM, dddd" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay
