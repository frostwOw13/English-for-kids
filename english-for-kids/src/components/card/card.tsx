import { RenderMainCards } from '../../shared/interfaces'
import './card.scss'

export default function Card(props: RenderMainCards) {
  return (
    <div className="card">
      <img className="card__image" src={props.image} alt=""></img>
      <h3 className="card__title">{props.title}</h3>
    </div>
  )
}
