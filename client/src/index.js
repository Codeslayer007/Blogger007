import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "";      // add Auth0 domain name
const clientId = ""; // add Auth0 clientID

ReactDOM.render(
 
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  
   
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

