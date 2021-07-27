import React from 'react'
import { FooterProps } from '../../shared/interfaces'
import './footer.scss'

export const Footer: React.FC<FooterProps> = ({ isPlay }) => {
  return (
    <footer className={isPlay ? 'footer play' : 'footer'}>
      <a className="footer__link" href="https://github.com/frostwOw13">
        My GitHub
      </a>
      <p>Made in 2021</p>
      <a href="https://rs.school/js/">
        <img className="footer__image" src="./rs-school.svg" alt="RS School" />
      </a>
    </footer>
  )
}
