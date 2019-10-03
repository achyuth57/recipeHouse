import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        !!currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              message: "Please Login Before Access the Content!"
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
