import Switcher from './components/switcher/switcher'
import Menu from './components/menu/menu'
import Field from './components/field/field'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.scss'
import CardsPage from './components/cards-page/cards-page'

export const App = () => {
  return (
    <>
      <Router>
        <div className="header">
          <Menu />
          <Switcher />
        </div>
        <Route exact path="/" render={() => <Field />} />
        <Route path="/categories-1" render={() => <CardsPage id={1} />} />
        <Route path="/categories-2" render={() => <CardsPage id={2} />} />
        <Route path="/categories-3" render={() => <CardsPage id={3} />} />
        <Route path="/categories-4" render={() => <CardsPage id={4} />} />
        <Route path="/categories-5" render={() => <CardsPage id={5} />} />
        <Route path="/categories-6" render={() => <CardsPage id={6} />} />
      </Router>
    </>
  )
}
