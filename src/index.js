import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import configstore from "./redux/configStore";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyle } from "./shared/util/GlobalStyle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configstore}>
    <GlobalStyle />
    <App />
  </Provider>
);

//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();
