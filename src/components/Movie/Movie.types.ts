import { MovieObject } from '../../types/movie.types'

export type MoviePropType = {
  movieDetail: MovieObject
  onSelect(arg: boolean): void
  updatedStatus: boolean
  onClickHigherResolution(arg: boolean): void
}

export type StyledProp = {
  image: string
}
