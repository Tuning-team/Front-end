import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansMedium from "../shared/fonts/notosans/NotoSansKR-Medium.woff"; //500
import NotoSansBold from "../shared/fonts/notosans/NotoSansKR-Bold.woff"; //700

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
    font-family: "Noto Sans KR",'Apple SD Gothic Neo', sans-serif;
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
  }

  button {
    cursor: pointer;
  }
  input, textarea {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  input:focus, textarea:focus {
    /* outline-style: solid; */
    /* outline-offset: 1px; */
    outline-color : var(--color-primary);
        /* -moz-outline-radius: 18px; */
    /* -webkit-tap-highlight-color : var(--color-primary); */
  }
  /* 인풋 자동완성 시 색상변경 방지 */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
	  transition: background-color 5000s ease-in-out 0s;
		-webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
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
  src: url(${NotoSansMedium}) format("woff");
  }
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  src: url(${NotoSansMedium}) format("woff");
  }
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  src: url(${NotoSansBold}) format("woff");
  } 
  @font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  src: url(${NotoSansBold}) format("woff");
  }
`;
