import React from "react";
import Router from "./shared/util/Router";

function App() {
  // 배포 환경에서 console.log, console.warn 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  console.warn = function () {};
  return <Router />;
}

export default App;
