import Switcher from './components/switcher/switcher'
import Menu from './components/menu/menu'
import Field from './components/field/field'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/styles.scss'
import CardsPage from './components/cards-page/cards-page'

export const App = () => {
  const [isPlay, setIsPlay] = useState(false)

  function togglePlay() {
    setIsPlay(!isPlay)
  }

  return (
    <>
      <Router>
        <div className="header">
          <Menu toggle={isPlay} />
          <Switcher toggle={togglePlay} />
        </div>
        <Route exact path="/" render={() => <Field toggle={isPlay} />} />
        <Route
          path="/categories-1"
          render={() => <CardsPage id={1} toggle={isPlay} />}
        />
        <Route
          path="/categories-2"
          render={() => <CardsPage id={2} toggle={isPlay} />}
        />
        <Route
          path="/categories-3"
          render={() => <CardsPage id={3} toggle={isPlay} />}
        />
        <Route
          path="/categories-4"
          render={() => <CardsPage id={4} toggle={isPlay} />}
        />
        <Route
          path="/categories-5"
          render={() => <CardsPage id={5} toggle={isPlay} />}
        />
        <Route
          path="/categories-6"
          render={() => <CardsPage id={6} toggle={isPlay} />}
        />
        <Route
          path="/categories-7"
          render={() => <CardsPage id={7} toggle={isPlay} />}
        />
        <Route
          path="/categories-8"
          render={() => <CardsPage id={8} toggle={isPlay} />}
        />
      </Router>
    </>
  )
}
