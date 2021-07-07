import './menu.scss'
import cards from '../cards'
import { NavLink } from 'react-router-dom'

export default function Menu(props: { [key: string]: boolean }) {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className={`menu__box ${props.toggle ? 'play' : ''}`}>
          <li>
            <NavLink to={'/'} className="menu__item">
              Main Page
            </NavLink>
          </li>
          {cards[0].map((category, id) => {
            return (
              <li key={id}>
                <NavLink
                  to={'/categories-' + (id + 1)}
                  className="menu__item"
                  activeClassName="active"
                >
                  {category}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
