import { CityService } from '../../servises/CityService.js'
import { currentWeatherSlice } from '../slices/currentWeatherSlice.js'
import { fetchCurrentWeather } from './fetchCurrentWeather.js'

export const fetchCurrentCity = (city) => async (dispatch) => {
  try {
    const res = await CityService.getCurrentCity(city)
    const { latitude, longitude, name } = res.data.results[0]
    dispatch(fetchCurrentWeather({ latitude, longitude }))
    dispatch(currentWeatherSlice.actions.fetchCurrentCity(name))
  } catch (error) {
    dispatch(currentWeatherSlice.actions.fetchCurrentCity('Город не найден!'))
  }
}
