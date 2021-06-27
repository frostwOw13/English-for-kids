import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
