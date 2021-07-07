import './cards-page.scss'
import cards from '../../components/cards'
import Card from '../card/card'
import { useState } from 'react'

export default function CardsPage(props: { [key: string]: unknown }) {
  const [isGameStarted, setIsGameStarted] = useState(false)

  if (!props.toggle && isGameStarted) {
    setIsGameStarted(false)
  }

  function gameStart() {
    setIsGameStarted(!isGameStarted)
  }

  return (
    <>
      <div className="cards">
        {cards[props.id].map(
          (word: { [key: string]: string }, index: number) => {
            return (
              <Card
                key={index}
                title={word.word}
                translate={word.translation}
                image={word.image}
                audio={word.audioSrc}
                isPlay={props.toggle}
              />
            )
          }
        )}
      </div>
      <button
        className={`btn start ${
          props.toggle && !isGameStarted ? '' : 'hidden'
        }`}
        onClick={gameStart}
      >
        Start game
      </button>
      <button
        className={`btn repeat ${isGameStarted ? '' : 'hidden'}`}
      ></button>
    </>
  )
}
