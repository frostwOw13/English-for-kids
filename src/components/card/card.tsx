import React, { useState } from 'react'
import { CardProps } from '../../shared/interfaces'
import './card.scss'

export const Card: React.FC<CardProps> = ({
  title,
  translate,
  image,
  audio,
  isPlay,
  onStep,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  function rotateCardClick() {
    setIsFlipped(true)
  }

  function rotateCardHover() {
    if (isFlipped === true) {
      setIsFlipped(false)
    }
  }

  function playAudio() {
    if (!isPlay) {
      new Audio(audio).play()
    }
  }

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onMouseLeave={rotateCardHover}
      onClick={playAudio}
      aria-hidden="true"
    >
      <div className={`card-front ${isPlay ? 'play' : ''}`}>
        <img
          className="card__image"
          src={image}
          alt={title}
          onClick={onStep}
          aria-hidden="true"
        ></img>
        <div className="card__bottom">
          <h3 className="card__title">{title}</h3>
          <div
            className={`card__rotate ${isFlipped ? 'hidden' : ''}`}
            onClick={rotateCardClick}
            aria-hidden="true"
          ></div>
        </div>
      </div>
      <div className="card-back">
        <img className="card__image" src={image} alt=""></img>
        <div className="card__bottom">
          <h3 className="card__title">{translate}</h3>
        </div>
      </div>
    </div>
  )
}
