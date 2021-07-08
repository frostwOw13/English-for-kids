import './card.scss'
import { useState } from 'react'

export default function Card(props: Record<string, string>) {
  const [isFlipped, setIsFlipped] = useState(false)

  function rotateCardClick() {
    setIsFlipped(true)
  }

  function rotateCardHover() {
    if (isFlipped === true) {
      setIsFlipped(false)
    }
  }

  function playAudio() {
    if (!props.isPlay) {
      new Audio(props.audio).play()
    }
  }

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onMouseLeave={rotateCardHover}
      onClick={playAudio}
      aria-hidden="true"
    >
      <div className={`card-front ${props.isPlay ? 'play' : ''}`}>
        <img
          className="card__image"
          src={props.image}
          alt={props.title}
          onClick={props.onStep}
          aria-hidden="true"
        ></img>
        <div className="card__bottom">
          <h3 className="card__title">{props.title}</h3>
          <div
            className={`card__rotate ${isFlipped ? 'hidden' : ''}`}
            onClick={rotateCardClick}
            aria-hidden="true"
          ></div>
        </div>
      </div>
      <div className="card-back">
        <img className="card__image" src={props.image} alt=""></img>
        <div className="card__bottom">
          <h3 className="card__title">{props.translate}</h3>
        </div>
      </div>
    </div>
  )
}
