import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Inter', sans-serif;
    margin: 0
  }

  body {
    background: ${({ theme }) => theme.palette.background || "red"}; 
    transition: .2s ;
  }
`;
