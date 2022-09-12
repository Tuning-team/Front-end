import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');



  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-weight: 400;
    max-width:480px;
    box-sizing: border-box;
    background-color: background-color: #fff;
  }
`;

export default GlobalStyle;
