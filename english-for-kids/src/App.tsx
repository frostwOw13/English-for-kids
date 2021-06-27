import Header from './components/header/header'
import Menu from './components/menu/menu'
import './styles.scss'

export const App = () => {
  return (
    <div className="wrapper">
      <Menu />
      <Header />
    </div>
  )
}
