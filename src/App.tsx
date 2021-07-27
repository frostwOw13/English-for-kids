import { Menu } from './components/menu/menu'
import { Field } from './components/field/field'
import { Footer } from './components/footer/footer'
import { Switcher } from './components/switcher/switcher'
import { CardsPage } from './components/cards-page/cards-page'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import './styles/styles.scss'

export const App: React.FC = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false)

  function togglePlay() {
    setIsPlay(!isPlay)
  }

  return (
    <>
      <Router>
        <div className="header">
          <Menu isPlay={isPlay} />
          <Switcher onToggle={togglePlay} />
        </div>
        <Route exact path="/" render={() => <Field isPlay={isPlay} />} />
        <Route
          path="/categories-1"
          render={() => <CardsPage id={0} isPlay={isPlay} />}
        />
        <Route
          path="/categories-2"
          render={() => <CardsPage id={1} isPlay={isPlay} />}
        />
        <Route
          path="/categories-3"
          render={() => <CardsPage id={2} isPlay={isPlay} />}
        />
        <Route
          path="/categories-4"
          render={() => <CardsPage id={3} isPlay={isPlay} />}
        />
        <Route
          path="/categories-5"
          render={() => <CardsPage id={4} isPlay={isPlay} />}
        />
        <Route
          path="/categories-6"
          render={() => <CardsPage id={5} isPlay={isPlay} />}
        />
        <Route
          path="/categories-7"
          render={() => <CardsPage id={6} isPlay={isPlay} />}
        />
        <Route
          path="/categories-8"
          render={() => <CardsPage id={7} isPlay={isPlay} />}
        />
      </Router>
      <Footer isPlay={isPlay} />
    </>
  )
}
