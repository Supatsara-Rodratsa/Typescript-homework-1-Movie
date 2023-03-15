import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${(props) => props.theme.fonts.gothic};
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }


    html {
      font-size: 100%;
    }

    body {
      flex-grow: 1;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      font-family: ${(props) => props.theme.fonts.gothic};
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.black};
      line-height: 1;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
      padding: 0;
      margin: 0;
    }
`

export default GlobalStyle
