import styled from 'styled-components'
import { StackProp } from './Stack.type'

const Stack = styled.div<StackProp>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItem || 'start'};
  gap: ${(props) => `${props.gap || 8}px`};
`
export default Stack
