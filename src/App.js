import React from "react";
import Router from "./shared/Router";

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").then(() => {
      console.log("Service Worker Resistered");
    });
  }

  return (
    <>
      <Router />
    </>
  );
}

export default App;
