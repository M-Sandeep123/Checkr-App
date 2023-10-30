import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "cors";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
        authorizationParams={{
          redirect_uri: process.env.CALLBACK_URL as string
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </ThemeProvider>
);
