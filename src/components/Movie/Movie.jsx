import styles from './Movie.module.css'

/**
 * MovieProps should have two props.
 *
 * - movie of Movie type
 * - onSelect callback function that selects current movie,
 *   but the parent stores the selected movie state.
 */

export const Movie = () => {
  return (
    <div className={styles.movie}>
      <h1>Movie title here</h1>
      <h2>Display some movie information here below.</h2>
      <button
        onClick={() => console.log('TODO toggle related movie information')}
      >
        Toggle related movies
      </button>
    </div>
  )
}
