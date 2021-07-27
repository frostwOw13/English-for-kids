import React from 'react'
import { Category } from '../category/category'
import { cards, categories } from '../cards'
import { FieldProps } from '../../shared/interfaces'
import './field.scss'

export const Field: React.FC<FieldProps> = ({ isPlay }) => {
  return (
    <div className="field">
      {categories.map((category, id) => {
        return (
          <Category
            title={category}
            image={cards[id][0].image}
            key={id}
            isPlay={isPlay}
          />
        )
      })}
    </div>
  )
}
