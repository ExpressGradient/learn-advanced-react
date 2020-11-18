import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const portalDiv = document.createElement("div");
portalDiv.id = "portal";
document.body.appendChild(portalDiv);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
