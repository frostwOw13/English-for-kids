import './switcher.scss'

export default function Switcher() {
  return (
    <div className="switcher">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
