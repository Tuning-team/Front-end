import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
@font-face {
  font-family: 'LeferiPoint-WhiteObliqueA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'OTWelcomeBA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}


  body {
    font-family: 'Noto Sans KR', sans-serif;
  //  font-family: 'LeferiPoint-WhiteObliqueA';
  //  font-family: 'OTWelcomeBA';
    font-size: 12px;
    font-weight: 400;
    max-width:480px;
    box-sizing: border-box;
    background-color: #fff;
  }
`;

export default GlobalStyle;
