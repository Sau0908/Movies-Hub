import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Button, Container } from "@material-ui/core";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Auth0Provider
      domain="dev-gcg610s3f8c7peaf.us.auth0.com"
      clientId="cUFNPUiWRWp3Z0bWyLSx9IrDF4KGLC1Z"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
