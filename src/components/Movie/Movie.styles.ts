import styled from 'styled-components'
import { StyledProp } from './Movie.types'
import Stack from '../Globals/Stack'
import Paragraph from '../Globals/Paragraph'

const MovieContainer = styled.div<StyledProp>`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: hidden;

  :before {
    content: '';
    background-image: ${(props) => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;
    position: absolute;
    filter: blur(8rem);
  }
`

const MovieImageContainer = styled.div`
  position: relative;
  max-height: 620px;
  overflow: hidden;
  width: fit-content;
`

const MovieImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`

const MovieDetailContainer = styled.div`
  padding: 20px 60px;
  position: relative;
  width: 80%;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;

  .fa {
    color: ${(props) => props.theme.colors.red};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`

const GenreContainer = styled(Stack)`
  gap: 8px;
  align-items: center;
`
const Genre = styled(Paragraph)`
  padding: 4px 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.red};
  font-size: 12px;
`
const ContentContainer = styled(Stack)`
  flex-direction: column;
  gap: 16px;
  justify-content: start;
  align-items: start;
  width: 100%;
`

export {
  MovieContainer,
  MovieImage,
  MovieImageContainer,
  MovieDetailContainer,
  RatingContainer,
  HeaderContainer,
  GenreContainer,
  Genre,
  ContentContainer,
}
