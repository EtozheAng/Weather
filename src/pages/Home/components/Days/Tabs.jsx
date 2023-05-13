import s from './Days.module.scss'
const Tabs = () => {
  const tabs = [
    {
      value: 'Температура',
    },
    {
      value: 'Осадки',
    },
    {
      value: 'Ветер',
    },
  ]
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
