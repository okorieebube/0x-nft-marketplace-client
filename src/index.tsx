import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="rqKaebnWsemjUzlerJkb3aTmQuLrCZ3cfOOJhKv3" serverUrl="https://fsk90n6sk99s.usemoralis.com:2053/server">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
