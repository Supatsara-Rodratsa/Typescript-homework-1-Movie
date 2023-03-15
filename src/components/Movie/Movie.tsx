import { useEffect, useState } from 'react'
import { ICON } from '../../constants/icon.constant'
import { countingRating } from '../../utils/utilities'
import Icon from '../Globals/Icon'
import Paragraph from '../Globals/Paragraph'
import Stack from '../Globals/Stack'
import Title from '../Globals/Title'
import {
  MovieContainer,
  MovieImage,
  MovieImageContainer,
  MovieDetailContainer,
  RatingContainer,
  HeaderContainer,
  GenreContainer,
  Genre,
  ContentContainer,
} from './Movie.styles'
import { MoviePropType } from './Movie.types'
import Button from '../Button'

/**
 * MovieProps should have two props.
 *
 * - movie of Movie type
 * - onSelect callback function that selects current movie,
 *   but the parent stores the selected movie state.
 */

export const Movie = (movie: MoviePropType) => {
  const { movieDetail, onSelect, updatedStatus, onClickHigherResolution } =
    movie

  const [showRelatedMovie, setShowRelatedMovie] = useState<boolean>(
    updatedStatus || false
  )

  useEffect(() => {
    setShowRelatedMovie(updatedStatus)
  }, [updatedStatus])

  const onClickToggle = () => {
    setShowRelatedMovie(!showRelatedMovie)
    onSelect(!showRelatedMovie)
  }

  const onClickHigherResolutionButton = () => {
    onClickHigherResolution(true)
  }

  const stars = countingRating(movieDetail.rating)

  const renderStar = (item: string, i: number) => {
    return <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
  }

  const mapGenre = (genre: string, index: number) => {
    return <Genre key={index}>{genre}</Genre>
  }

  const RenderDirector = () => {
    return (
      <Stack alignItem="center" style={{ width: '100%' }}>
        <Paragraph width="fit-content" fontSize="14">
          <span style={{ fontWeight: 900 }}>Directors:</span>{' '}
          {movieDetail.directors.join(',')}
        </Paragraph>
      </Stack>
    )
  }

  const RenderActor = () => {
    return (
      <Stack alignItem="center" style={{ width: '100%' }}>
        <Paragraph width="fit-content" fontSize="14">
          <span style={{ fontWeight: 900 }}>Actors:</span>{' '}
          {movieDetail.actors.join(',  ')}
        </Paragraph>
      </Stack>
    )
  }

  const RenderGenre = () => {
    return (
      <GenreContainer>
        <Paragraph alignItem="start" fontSize="14" style={{ fontWeight: 900 }}>
          Genre:
        </Paragraph>
        {movieDetail.genre.map((genre, index) => mapGenre(genre, index))}
      </GenreContainer>
    )
  }

  const RenderIconDetail = () => {
    return (
      <Stack alignItem="center" gap={24}>
        <Stack alignItem="center" gap={4}>
          <Icon type={ICON.CALENDAR} />
          <Paragraph alignItem="center">{movieDetail.year}</Paragraph>
        </Stack>
        <Stack alignItem="center" gap={4}>
          <Icon type={ICON.RATING} size="28px" />
          <Paragraph alignItem="center">{movieDetail.rating}</Paragraph>
        </Stack>
      </Stack>
    )
  }

  const RenderDescription = () => {
    return (
      <Stack direction="column">
        <Title width="fit-content" fontSize="14">
          Description:
        </Title>
        <Paragraph alignItem="start" lineHeight="1.5rem">
          {movieDetail.desc}
        </Paragraph>
      </Stack>
    )
  }

  const RenderRelatedMovie = () => {
    return (
      <Stack
        alignItem="center"
        style={{ width: '100%', opacity: showRelatedMovie ? 1 : 0 }}
      >
        <Paragraph width="fit-content" fontSize="14">
          <span style={{ fontWeight: 900 }}>Related Movie:</span>{' '}
          {movieDetail.relatedMovies.map(({ name }) => name).join(', ')}
        </Paragraph>
      </Stack>
    )
  }

  return (
    <MovieContainer image={movieDetail.image_url}>
      <MovieDetailContainer>
        <RatingContainer>
          {stars.map((star: string, i: number) => renderStar(star, i))}
        </RatingContainer>
        <HeaderContainer>
          <Title alignItem="center" textTransform="uppercase">
            {movieDetail.name}
          </Title>
          <RenderIconDetail />
        </HeaderContainer>
        <ContentContainer>
          <RenderDirector />
          <RenderActor />
          <RenderGenre />
        </ContentContainer>
        <RenderDescription />
        <RenderRelatedMovie />
        <Stack gap={16}>
          <Button onClick={onClickToggle} label="Toggle related movies" />
          <Button
            onClick={onClickHigherResolutionButton}
            label="Higher resolution photo"
          />
        </Stack>
      </MovieDetailContainer>
      <MovieImageContainer>
        <MovieImage src={movieDetail.image_url} />
      </MovieImageContainer>
    </MovieContainer>
  )
}
