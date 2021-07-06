import { RenderMainCards } from '../../shared/interfaces'
import cards from '../cards'
import { useHistory } from 'react-router-dom'
import './category.scss'

export default function Category(props: RenderMainCards) {
  const history = useHistory()
  const url = '/categories-' + (cards[0].indexOf(props.title) + 1)

  return (
    <div
      className="category"
      onClick={() => {
        history.push(url)
      }}
      aria-hidden="true"
    >
      <div className="category__top-color"></div>
      <img className="category__image" src={props.image} alt=""></img>
      <h3 className="category__title">{props.title}</h3>
    </div>
  )
}
