import React, { useState, useRef } from 'react'
import { Card } from '../card/card'
import { cards } from '../../components/cards'
import { CardsPageProps, IWord } from '../../shared/interfaces'
import { ANSWER_DELAY, MODALE_DELAY } from '../../shared/constants'
import './cards-page.scss'

export const CardsPage: React.FC<CardsPageProps> = ({ id, isPlay }) => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [stars, setStars] = useState<Array<string>>([])
  const [winClass, setWinClass] = useState<string>('')
  const currentCount = useRef<number>(0)
  const currentCards = useRef<IWord[]>([])
  const winnerCount = useRef<boolean[]>([])

  if (!isPlay && isGameStarted) {
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
      new Audio('./audio/failure.mp3').play()
      setTimeout(() => {
        setWinClass('')
      }, MODALE_DELAY)
    } else {
      setWinClass('success')
      new Audio('./audio/success.mp3').play()
      setTimeout(() => {
        setWinClass('')
      }, MODALE_DELAY)
    }
  }

  function newGame() {
    currentCards.current = cards[id].slice(0)
    currentCards.current.sort(function () {
      return 0.5 - Math.random()
    })

    if (currentCards)
      new Audio(currentCards.current[currentCount.current]?.audioSrc).play()
    currentCount.current = currentCount.current + 1

    step()
  }

  function step(event?: React.MouseEvent) {
    if (isGameStarted && currentCount.current <= currentCards.current.length) {
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
          if (currentCount.current > currentCards.current.length) renderModale()
        }, ANSWER_DELAY)
      } else {
        new Audio('./audio/error.mp3').play()
        setTimeout(() => {
          if (currentCards)
            new Audio(
              currentCards.current[currentCount.current - 1]?.audioSrc
            ).play()
          setStars((prevStars) => [...prevStars, 'star-error'])
          winnerCount.current = [...winnerCount.current, false]
        }, ANSWER_DELAY)
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
        {cards[id].map((word: IWord, index: number) => {
          return (
            <Card
              key={index}
              title={word.word}
              translate={word.translation}
              image={word.image}
              audio={word.audioSrc}
              isPlay={isPlay}
              onStep={step}
            />
          )
        })}
      </div>
      <button
        className={`btn start ${isPlay && !isGameStarted ? '' : 'hidden'}`}
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
