import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyles from "../src/Styles/GlobalStyles.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
    <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);