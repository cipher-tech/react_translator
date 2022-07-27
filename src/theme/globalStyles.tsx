import { createGlobalStyle } from "styled-components";
import {ThemeType} from "./theme";


const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
*,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;   
  }
  a{
    text-decoration: none;
    color: currentColor;
  }
  html {
      box-sizing: border-box;
      font-size: 62.5%;
      ${"" /* // 10px/16px = 62.5% -> 1rem = 10px; */}
      @media only screen and (min-width: ${(props) => props.theme.breakPoints.bpLargest}) {
          font-size: 80%; 
      }
      @media only screen and (max-width: ${(props) => props.theme.breakPoints.bpLarge}) {
          font-size: 50%; 
      }
  }
  body{
      ${"" /* display: grid; */}
      font-family: ${(props) => props.theme.font.family.mainFont}, montserrat, sans-serif;
      background: ${(props) => props.theme.colors.colorWhite};
      color: ${(props) => props.theme.colors.colorDark};
      font-size: ${(props) => props.theme.font.size.xxxSmall};
  }
`;

export default GlobalStyle;