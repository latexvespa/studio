import React from "react"
import ReactDOM from "react-dom"
import GlobalStyles from "./styles/global-styles"
import App from "./app"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
