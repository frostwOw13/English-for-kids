import React from 'react'
import { SwitcherProps } from '../../shared/interfaces'
import './switcher.scss'

export const Switcher: React.FC<SwitcherProps> = ({ onToggle }) => {
  return (
    <div className="switcher">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={onToggle} />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
