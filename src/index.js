import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-gcg610s3f8c7peaf.us.auth0.com"
    clientId="cUFNPUiWRWp3Z0bWyLSx9IrDF4KGLC1Z"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
