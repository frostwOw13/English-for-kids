import './switcher.scss'

export default function Switcher(props: { [key: string]: any }) {
  return (
    <div className="switcher">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={props.onToggle} />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
