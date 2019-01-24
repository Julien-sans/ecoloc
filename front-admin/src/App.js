import React, { Component, Fragment } from 'react';
import Home from './components/authentification/Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/authentification/LoginPage.js';
import CreateSpace from './components/authentification/CreateSpace';
import ProjectList from './components/ProjectList';
import ProtectedRoutes from './components/ProtectedRoutes';

class App extends Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/loginpage"
              component={LoginPage}
            />
            <Route
              exact
              path="/createspace"
              component={CreateSpace}
            />
            {/* <Route
              exact
              path="/projectlist/:association_id"
              component={ProjectList}
            /> */}
            <Route
              exact
              path="/projectlist"
              component={ProjectList}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
