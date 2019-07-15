import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import ProjectDescription from "./project-description";
import ProjectProposal from "./project-proposal";
import Notfound from "./notfound";
import UserProvider from "./UserProvider";
import "bootstrap/dist/css/bootstrap.css";
import ProtectedRoute from "./ProtectedRoute";
import 'font-awesome/css/font-awesome.min.css';

const routing = (
  <UserProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <ProtectedRoute>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDescription} />
          <Route exact path="/project-proposal" component={ProjectProposal} />
        </ProtectedRoute>
        <Route component={Notfound} />
      </Switch>
    </Router>
  </UserProvider>
);

ReactDOM.render(routing, document.getElementById("root"));
