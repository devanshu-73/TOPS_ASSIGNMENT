import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider domain={authConfig.domain}
  //   clientId={authConfig.clientId}
  //   redirectUri={window.location.origin}>
  // </Auth0Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
