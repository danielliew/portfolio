import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./firebase";
import CursorContextProvider from "./components/Cursor/CursorContext";

ReactDOM.render(
  <React.StrictMode>
    <CursorContextProvider>
      <App />
    </CursorContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
