import GlobalSvgSelector from '../../assets/icon/global/GlobalSvgSelector'
import s from './Header.module.scss'
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.title}>Погода</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={s.input_icons}>
          <input
            type="text"
            placeholder="Enter city name"
            className={s.search}
          />
          <div className={s.search_icon}>
            <GlobalSvgSelector id="search-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
