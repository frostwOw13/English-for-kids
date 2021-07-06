import './cards-page.scss'
import cards from '../../components/cards'
import Card from '../card/card'

export default function CardsPage(props: { [key: string]: number }) {
  return (
    <div className="cards">
      {cards[props.id].map((word, index) => {
        return <Card key={index} title={word.word} image={word.image} />
      })}
    </div>
  )
}
