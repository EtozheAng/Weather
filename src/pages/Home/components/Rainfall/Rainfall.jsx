import s from './Rainfall.module.scss'
const Rainfall = ({ weather }) => {
  const { precipitation_sum, precipitation_probability_max } = weather.daily
  return (
    <div className={s.rainfall}>
      <div className={s.rainfall__item}>
        <p>Кол. осадков</p>
        <span>{precipitation_sum[0]} mm</span>
      </div>
      <div className={s.rainfall__item}>
        <p>Вероятность осадков</p>
        <span>{precipitation_probability_max[0]} %</span>
      </div>
    </div>
  )
}

export default Rainfall
