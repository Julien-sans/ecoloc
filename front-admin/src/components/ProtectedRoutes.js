import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({

  component: Component, isAuthenticated, signIn, ...rest }) => {
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    signIn();
  }
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))
      }
    />
  );
};

export default ProtectedRoute;