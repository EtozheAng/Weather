import s from './Rainfall.module.scss'
const Rainfall = () => {
  return (
    <div className={s.rainfall}>
      <div className={s.rainfall__item}>
        <p>Кол. осадков</p>
        <span>45mm</span>
      </div>
      <div className={s.rainfall__item}>
        <p>Годовой нормы</p>
        <span>+ 7%</span>
      </div>
    </div>
  )
}

export default Rainfall
