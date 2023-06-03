import GlobalSvgSelector from '../../assets/icon/global/GlobalSvgSelector'
import s from './Header.module.scss'
import { useTheme } from '../../hooks/useTheme'
import { createRef } from 'react'
import { useDispatch } from 'react-redux'
import { currentWeatherSlice } from '../../store/slices/currentWeatherSlice'
const Header = () => {
  const theme = useTheme()
  function changeTheme() {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
  }
  const cityRef = createRef('')
  const dispatch = useDispatch()
  function getCity() {
    const nameCity = cityRef.current.value
    dispatch(currentWeatherSlice.actions.fetchCurrentCity(nameCity.trim()))
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.title}>Погода</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={s.input_icons}>
          <input
            type="text"
            placeholder="Enter city name"
            className={s.search}
            ref={cityRef}
            required
          />
          <div onClick={getCity} className={s.search_icon}>
            <GlobalSvgSelector id="search-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
