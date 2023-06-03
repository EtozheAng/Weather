import { useEffect } from 'react'
import s from './Home.module.scss'
import Days from './components/Days/Days'
import Rainfall from './components/Rainfall/Rainfall'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentCity } from '../../store/thunks/fetchCurrentCity.js'
const Home = () => {
  const dispatch = useDispatch()
  const { weather, city } = useSelector(
    (state) => state.currentWeatherSliceReducer
  )
  useEffect(() => {
    dispatch(fetchCurrentCity(city))
  }, [dispatch, city])
  return (
    <>
      <ThisDay weather={weather} city={city} />
      <div className={s.wrapper}>
        <div className={s.info}>
          <ThisDayInfo weather={weather} />
          <Rainfall weather={weather} />
        </div>
        <div className={s.days}>
          <Days weather={weather} />
        </div>
      </div>
    </>
  )
}

export default Home
