import React from 'react'
import { categories } from '../cards'
import { NavLink } from 'react-router-dom'
import { MenuProps } from '../../shared/interfaces'
import './menu.scss'

export const Menu: React.FC<MenuProps> = ({ isPlay }) => {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className={`menu__box ${isPlay ? 'play' : ''}`}>
          <li>
            <NavLink to={'/'} className="menu__item">
              Main Page
            </NavLink>
          </li>
          {categories.map((category, id) => {
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
