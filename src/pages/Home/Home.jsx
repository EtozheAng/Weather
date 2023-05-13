import s from './Home.module.scss'
import Days from './components/Days/Days'
import Rainfall from './components/Rainfall/Rainfall'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
const Home = () => {
  return (
    <div className={s.home}>
      <ThisDay />
      <div className={s.wrapper}>
        <div className={s.info}>
          <ThisDayInfo />
          <Rainfall />
        </div>
        <div className={s.days}>
          <Days />
        </div>
      </div>
    </div>
  )
}

export default Home
