import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/authentification/LoginPage.js';
import ProjectList from './components/ProjectList';
import CreateProject from './components/CreateProject';
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
              component={LoginPage}
            />
            <Route
              exact
              path="/createproject"
              component={CreateProject}
            />
            <Route
              exact
              path="/editproject/:id"
              component={CreateProject}
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
