// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      bg: string
      grey: {
        dark: string
        default: string
        light: string
        ultraLight: string
      }
      white: string
      secondary: string
    }

    transitions: {
      normal: string
    }

    fontSize: {
      small: string
    }

    breakpoints: {
      tablet: string
      phone: string
    }

    fontFamily: {
      serif: string
      sansSerif: string
    }

    maxWidth: string

    baseFontSize: string
  }
}