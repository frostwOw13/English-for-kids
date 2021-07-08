import './cards-page.scss'
import cards from '../../components/cards'
import Card from '../card/card'
import React, { useState, useRef } from 'react'

export default function CardsPage(props: any) {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [stars, setStars] = useState<Array<string>>([])
  const [winClass, setWinClass] = useState<string>('')
  const currentCount = useRef<number>(0)
  const currentCards = useRef<any>([])
  const winnerCount = useRef<Array<boolean>>([])

  if (!props.toggle && isGameStarted) {
    setWinClass('')
    setStars([])
    setIsGameStarted(false)
  }

  function gameStart() {
    winnerCount.current = []
    currentCount.current = 0
    setIsGameStarted(true)
    newGame()
  }

  function renderModale() {
    if (winnerCount.current.includes(false)) {
      setWinClass('failure')
      setTimeout(() => {
        setWinClass('')
      }, 2000)
    } else {
      setWinClass('success')
      setTimeout(() => {
        setWinClass('')
      }, 2000)
    }
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
        new Audio('./audio/correct.mp3').play()
        setTimeout(() => {
          if (currentCards)
            new Audio(
              currentCards.current[currentCount.current]?.audioSrc
            ).play()
          setStars((prevStars) => [...prevStars, 'star-correct'])
          currentCount.current = currentCount.current + 1
          winnerCount.current = [...winnerCount.current, true]
          if (currentCount.current > 8) renderModale()
        }, 1000)
      } else {
        new Audio('./audio/error.mp3').play()
        setTimeout(() => {
          if (currentCards)
            new Audio(
              currentCards.current[currentCount.current - 1]?.audioSrc
            ).play()
          setStars((prevStars) => [...prevStars, 'star-error'])
          winnerCount.current = [...winnerCount.current, false]
        }, 1000)
      }
    }
  }

  return (
    <>
      <div className={winClass ? winClass : 'hidden'}>
        <p className="modale-title">
          {winnerCount.current.includes(false)
            ? `${winnerCount.current.reduce((acc, el) => {
                el === false ? acc++ : acc
                return acc
              }, 0)}` + ' errors'
            : 'Win!'}
        </p>
      </div>
      <div className="rating">
        {stars.map((starClassName, id) => {
          return <div className={starClassName} key={id}></div>
        })}
      </div>
      <div className="cards">
        {cards[props.id].map((word: any, index: number) => {
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
        })}
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
