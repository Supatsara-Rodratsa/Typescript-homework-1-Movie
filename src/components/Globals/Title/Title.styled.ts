import styled from 'styled-components'
import { TitleProp } from './Title.type'

const Title = styled.h1<TitleProp>`
  font-size: ${(props) => `${props.fontSize || 42}px`};
  font-weight: 900;
  color: ${(props) => props.color || props.theme.colors.white};
  width: ${(props) => props.width || '100%'};
  text-align: ${(props) => props.alignItem || 'start'};
  text-transform: ${(props) => props.textTransform || 'none'};
  letter-spacing: ${(props) => props.lineSpace || 'normal'};
`
export default Title
