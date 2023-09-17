import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Auth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          login
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logut
        </Button>
      )}

      {isAuthenticated && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Auth;
