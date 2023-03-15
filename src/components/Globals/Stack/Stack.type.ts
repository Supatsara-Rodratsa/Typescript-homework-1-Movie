import {
  AlignType,
  DirectionType,
  JustifyContentType,
} from '../../../types/prop.types'

export type StackProp = {
  direction?: DirectionType
  justifyContent?: JustifyContentType
  alignItem?: AlignType
  gap?: number
}
