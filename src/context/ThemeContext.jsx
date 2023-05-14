import { createContext } from 'react'

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  changeTheme: () => {},
})
