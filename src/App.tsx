import { ThemeProvider } from 'styled-components'
import './App.css'
import { Movie } from './components/Movie'
import MovieJson from './data/movies.json'
import { MovieObject, Path } from './types/movie.types'
import defaultTheme from './styles/Theme.styled'
import GlobalStyle from './styles/Global.styled'
import useAxios from './hooks/useAxios'
import Paragraph from './components/Globals/Paragraph'
import { useState, useEffect } from 'react'
import Stack from './components/Globals/Stack'
import Button from './components/Button'
import { blobToBase64, getURLPath } from './utils/utilities'

function App() {
  // TODO create useState hook that keeps the state of selected movie
  const [movieData, setMovieData] = useState<MovieObject>()
  const [showHigherResolutionImage, setShowHigherResolutionImage] =
    useState<boolean>(false)
  const [currentToggleStatus, setCurrentToggleStatus] = useState<boolean>(false)
  const currentPath = getURLPath(showHigherResolutionImage)
  const { response, loading, error } = useAxios(
    currentPath.path,
    currentPath.responseType
  )

  useEffect(() => {
    if (response) {
      if (!showHigherResolutionImage) {
        setMovieData(response as MovieObject)
      }

      if (showHigherResolutionImage) {
        blobToBase64(response as Blob).then((result) => {
          if (result && movieData) {
            setMovieData({
              ...movieData,
              image_url: result as string,
            })
          }
        })
      }
    }
  }, [response, showHigherResolutionImage])

  if (loading) {
    return <Paragraph color="white">Loading...</Paragraph>
  }

  if (error) {
    return <Paragraph color="white">Connection Error!</Paragraph>
  }

  const getCurrentToggleStatus = (status: boolean) => {
    setCurrentToggleStatus(status)
  }

  const onClickParentToggle = () => {
    setCurrentToggleStatus(!currentToggleStatus)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Stack direction="column" alignItem="center" gap={32}>
        <Button label="Toggle related movies" onClick={onClickParentToggle} />
        {movieData && (
          <Movie
            movieDetail={movieData}
            onSelect={getCurrentToggleStatus}
            updatedStatus={currentToggleStatus}
            onClickHigherResolution={(result: boolean) =>
              setShowHigherResolutionImage(result)
            }
          />
        )}
      </Stack>
    </ThemeProvider>
  )
}

export default App
