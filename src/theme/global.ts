import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    color: #ffffff;
    font-family: 'Figtree', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    position: relative;
    height: 100%;
    margin: 0px;
    background-color: #000000;
  }

  a {
    text-decoration: none;
  }

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;