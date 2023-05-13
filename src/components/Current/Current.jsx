import moment from 'moment'
import backround from './image/image.jpg'
import modul from './Current.module.css'

const Current = ({ hourly }) => {
  // const [time, setTime] = useState(hour)
  const m = moment()
  const hour = m.hour()
  // console.log(hourly)
  const temperatureNow = Math.ceil(hourly?.temperature_2m[hour])
  return (
    <div className={modul.container}>
      <div className={modul.temperature__bg}>
        {/* <img src={backround} alt="" /> */}
        <div className={modul.temperature__now}>{temperatureNow}°</div>
      </div>
    </div>
  )
}

export default Current
