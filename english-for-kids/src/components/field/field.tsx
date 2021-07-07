import Category from '../category/category'
import cards from '../cards'
import './field.scss'

export default function Field(props: { [key: string]: boolean }) {
  return (
    <div className="field">
      {cards[0].map((category, id) => {
        return (
          <Category
            title={category}
            image={cards[id + 1][0].image}
            key={id}
            isPlay={props.toggle}
          />
        )
      })}
    </div>
  )
}
