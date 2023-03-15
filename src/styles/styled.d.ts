import 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { StyleClosetTheme } from './theme'

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass

  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      black: string
      white: string
      red: string
    }
    fonts: {
      gothic: string
    }
  }
}
