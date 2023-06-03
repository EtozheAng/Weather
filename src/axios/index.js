import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
api.interceptors.request.use((config) => {
  config.url =
    config.url +
    '&hourly=' +
    process.env.REACT_APP_API_HOURLY +
    '&daily=' +
    process.env.REACT_APP_API_DAILY +
    '&forecast_days=7' +
    '&timezone=' +
    process.env.REACT_APP_API_TIMEZONE +
    '&current_weather=true'
  return config
})

export default api
