import styled from 'styled-components'
import { ParagraphProp } from './Paragraph.type'

const Paragraph = styled.p<ParagraphProp>`
  font-size: ${(props) => `${props.fontSize || 16}px`};
  color: ${(props) => props.color || props.theme.colors.white};
  width: ${(props) => props.width || '100%'};
  text-align: ${(props) => props.alignItem || 'start'};
  text-transform: ${(props) => props.textTransform || 'none'};
  line-height: ${(props) => props.lineHeight || 'normal'};
`
export default Paragraph
