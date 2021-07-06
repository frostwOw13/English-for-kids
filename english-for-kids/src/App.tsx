import Switcher from './components/switcher/switcher'
import Menu from './components/menu/menu'
import Field from './components/field/field'
import './styles.scss'

export const App = () => {
  return (
    <>
      <div className="header">
        <Menu />
        <Switcher />
      </div>
      <Field />
    </>
  )
}
