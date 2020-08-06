import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//This is the theme overide for the whole project that changes the primary and secondary colours
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#005792",
    },
    secondary: {
      main: "#3282b8",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
