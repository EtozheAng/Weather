import WeatherService from '../../servises/WeatherService.js'
import { currentWeatherSlice } from '../slices/currentWeatherSlice.js'
export const fetchCurrentWeather = (obj) => async (dispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
    const res = await WeatherService.getCurrentWeather(obj)
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
    }
  } catch (error) {
    console.log(error)
  }
}
