import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  :root {
    --color-primary: #572cff;
    --color-background:#EEEEF6;
    --color-input:#F5F5F5;
    --color-disabled: #adadad;
    --box-shadow:4px 4px 8px #D4D1E5;



  }
  body {
    //font-family: "Noto Sans KR", sans-serif;
    // /* box-sizing: border-box; */
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100vh;
    min-height: 100vh;
    margin: auto;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  h2{
    font-size: 1.5rem
  }
  p{
    font-size:1rem
  }
`;
