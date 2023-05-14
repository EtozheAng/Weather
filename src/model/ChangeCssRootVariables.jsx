// модель, которая меняет css переменные
export function changeCssRootVariables(theme) {
  const root = document.querySelector(':root')
  const components = [
    'body-background',
    'components-background',
    'shadow-background',
    'color',
    'img-background',
    'input-color',
  ]
  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    )
  })
}
