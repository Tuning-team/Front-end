import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import configstore from "./redux/configStore";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configstore}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);

//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();
https: reportWebVitals();
