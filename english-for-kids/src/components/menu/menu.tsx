import './menu.scss'

export default function Menu() {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/#">
              Главная
            </a>
          </li>
          <li>
            <a className="menu__item" href="/#">
              Проекты
            </a>
          </li>
          <li>
            <a className="menu__item" href="/#">
              Команда
            </a>
          </li>
          <li>
            <a className="menu__item" href="/#">
              Блог
            </a>
          </li>
          <li>
            <a className="menu__item" href="/#">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
