import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentWeatherSliceReducer from './slices/currentWeatherSlice.js'

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
