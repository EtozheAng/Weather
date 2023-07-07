import axios from 'axios'

export class CityService {
  static getCurrentCity(city) {
    return axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json`
    )
  }
}
