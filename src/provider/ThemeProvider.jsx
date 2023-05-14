import { useState } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'
import { changeCssRootVariables } from '../model/ChangeCssRootVariables'
import { storage } from '../model/Storage'

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(storage.getItem('theme') || Theme.LIGHT)
  changeCssRootVariables(theme)
  function changeTheme(theme) {
    storage.setItem('theme', theme) // добавляет тему в хранилище
    setTheme(theme) // записываем тему в useState
    changeCssRootVariables(theme) // изменяем переменные
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}
