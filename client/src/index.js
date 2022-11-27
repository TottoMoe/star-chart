import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <div>
  // 	<App />
  // </div>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const container = document.getElementById('App');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
