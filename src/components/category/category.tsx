import React from 'react'
import { useHistory } from 'react-router-dom'
import { categories } from '../cards'
import { CategoryProps } from '../../shared/interfaces'
import './category.scss'

export const Category: React.FC<CategoryProps> = ({ title, image, isPlay }) => {
  const history = useHistory()
  const url = '/categories-' + (categories.indexOf(title) + 1)

  return (
    <div
      className="category"
      onClick={() => {
        history.push(url)
      }}
      aria-hidden="true"
    >
      <div className={`category__top-color ${isPlay ? 'play' : ''}`}></div>
      <img className="category__image" src={image} alt=""></img>
      <h3 className="category__title">{title}</h3>
    </div>
  )
}
