export interface CardsPageProps {
  id: number
  isPlay: boolean
}

export interface CardProps {
  title: string
  translate: string
  image: string
  audio: string
  isPlay: boolean
  onStep: () => void
}

export interface FieldProps {
  isPlay: boolean
}

export interface SwitcherProps {
  onToggle: () => void
}

export interface MenuProps {
  isPlay: boolean
}

export interface CategoryProps {
  title: string
  image: string
  isPlay: boolean
}

export interface IWord {
  word: string
  translation: string
  image: string
  audioSrc: string
}
