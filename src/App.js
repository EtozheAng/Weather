import { useEffect, useState } from 'react'
import Current from './components/Current/Current'
import './styles/index.scss'
import Home from './page/Home/Home'

function App() {
  const [res, setRes] = useState({})
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=54.20&longitude=37.62&hourly=temperature_2m&forecast_days=1&timezone=Europe%2FMoscow'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setRes(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  console.log(res)
  return (
    <>
      <Home />
      <div className="App">
        <Current {...res} />
        {/* <button onClick={handlerClick}>Нажать</button> */}
      </div>
    </>
  )
}

export default App
