import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    authentification
} from '../actions/forms';

const ProtectedRoute = ({ component: Component, isAuthenticated, signIn, ...rest }) => {

  if(!isAuthenticated) {
    signIn();
  }
  console.log(isAuthenticated);
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


const mapStateToProps = (state) => {
  const { auth } = state;
  return {
      isAuthenticated: state.auth !== null
  }
};

const mapDispatchToProps = {
  signIn: authentification
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
