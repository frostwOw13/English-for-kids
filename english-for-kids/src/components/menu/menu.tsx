import './menu.scss'
import cards from '../cards'

export default function Menu() {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          {cards[0].map((category, id) => {
            return (
              <li key={id}>
                <a className="menu__item" href="/#">
                  {category}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
