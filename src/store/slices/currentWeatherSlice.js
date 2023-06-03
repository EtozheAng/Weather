import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weather: {
    current_weather: {
      temperature: 0,
    },
    daily: {
      temperature_2m_max: [],
      sunrise: [],
      sunset: [],
      uv_index_max: [0],
      precipitation_sum: [0],
      precipitation_probability_max: [0],
      windspeed_10m_max: [],
    },
    hourly: {
      relativehumidity_2m: [0],
      rain: [],
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  city: 'Tula',
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true
    },
    fetchCurrentCity(state, action) {
      state.city = action.payload
    },
    fetchCurrentWeatherSuccess(state, action) {
      state.weather = action.payload.data
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(state, action) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})

export default currentWeatherSlice.reducer
