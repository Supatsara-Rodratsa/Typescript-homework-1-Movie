export type MovieObject = {
  /**
   * Type out movie properties here.
   */
  id: string
  actors: string[]
  desc: string
  directors: string[]
  genre: string[]
  image_url: string
  imdb_url: string
  name: string
  rating: number
  year: number
  oscars: Oscar[]
  relatedMovies: RelatedMovie[]
}

type Oscar = {
  oscar: string
  name: string
  year: string
}

type RelatedMovie = {
  id: number
  name: string
}
