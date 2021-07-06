import './category.scss'

export default function Category(props: any) {
  return (
    <div className="category">
      <div className="category__top-color"></div>
      <img className="category__image" src={props.image} alt=""></img>
      <h3 className="category__title">{props.title}</h3>
    </div>
  )
}
