import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansMedium from "../shared/fonts/notosans/NotoSansKR-Medium.otf"; //500
import NotoSansBold from "../shared/fonts/notosans/NotoSansKR-Bold.otf"; //700
import RobotoMedium from "../shared/fonts/roboto/Roboto-Medium.ttf";
import RobotoBold from "../shared/fonts/roboto/Roboto-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  :root {
    --color-primary: #572cff;
    --color-background:#EEEEF6;
    --color-input:#F5F5F5;
    --color-disabled: #adadad;
    --box-shadow:4px 4px 8px #D4D1E5;
    
  }

  * {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0; 
    padding: 0;
    border: 0;
    box-sizing: border-box; 
  }
  body {
    display: flex;
    align-items: center;
    flex-direction: column; 

    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    font-family: "Noto Sans KR", "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  html {
    overflow-y: scroll;
  }
  html::-webkit-scrollbar {
    display: none;
  }

  /* noto sans fonts */
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  src: url(${NotoSansMedium}) format("truetype");
  }
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  src: url(${NotoSansMedium}) format("truetype");
  }
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  src: url(${NotoSansBold}) format("truetype");
  } @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  src: url(${NotoSansBold}) format("truetype");
  }
  /* Roboto fonts */
  @font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: url(${RobotoMedium}) format("truetype");
  } 
  @font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  src: url(${RobotoMedium}) format("truetype");
  }
  @font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: url(${RobotoBold}) format("truetype");
  } 
  @font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  src: url(${RobotoBold}) format("truetype");
  }
`;
