import api from '../axios/index.js'

export default class WeatherService {
  static getCurrentWeather({ latitude, longitude }) {
    return api.get(`?latitude=${latitude}&longitude=${longitude}`)
  }
}
