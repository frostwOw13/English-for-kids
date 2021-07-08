import './cards-page.scss'
import cards from '../../components/cards'
import Card from '../card/card'
import React, { useState, useRef } from 'react'

export default function CardsPage(props: { [key: string]: unknown }) {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const currentCount = useRef<number>(0)
  const currentCards = useRef<Array<{ [key: string]: string }>>([])

  if (!props.toggle && isGameStarted) {
    setIsGameStarted(false)
  }

  function gameStart() {
    currentCount.current = 0
    setIsGameStarted(true)
    newGame()
  }

  function newGame() {
    currentCards.current = cards[props.id].slice(0)
    currentCards.current.sort(function () {
      return 0.5 - Math.random()
    })

    if (currentCards)
      new Audio(currentCards.current[currentCount.current]?.audioSrc).play()
    currentCount.current = currentCount.current + 1

    step()
  }

  function step(event?: React.MouseEvent) {
    if (isGameStarted && currentCount.current <= 8) {
      if (
        (event?.target as HTMLInputElement).alt ===
        currentCards.current[currentCount.current - 1].word
      ) {
        console.log('right')
        new Audio('./audio/correct.mp3').play()
        setTimeout(() => {
          if (currentCards)
            new Audio(
              currentCards.current[currentCount.current]?.audioSrc
            ).play()
          currentCount.current = currentCount.current + 1
        }, 1000)
      } else {
        console.log('wrong')
        new Audio('./audio/error.mp3').play()
        setTimeout(() => {
          if (currentCards)
            new Audio(
              currentCards.current[currentCount.current]?.audioSrc
            ).play()
          currentCount.current = currentCount.current + 1
        }, 1000)
      }
    }
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
                onStep={step}
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
        onClick={() =>
          new Audio(
            currentCards.current[currentCount.current - 1]?.audioSrc
          ).play()
        }
      ></button>
    </>
  )
}
