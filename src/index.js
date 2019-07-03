import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Projects from "./projects";
import ProjectDescription from "./project-description";
import ProjectProposal from "./project-proposal";
import Notfound from "./notfound";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const routing = (
    <Router>
        <div>
            <Link to="/">
                <div className="logo py-4 px-4 mb-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/smiles-ai-images/o/logo_smile.ai.jpg?alt=media&token=ea199bd3-4c7c-47fe-9a58-7c9efd054ce4" className="float-left" alt="Our logo" />
                </div>
            </Link>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={ProjectDescription} />
                <Route exact path="/project-proposal" component={ProjectProposal} />
                <Route component={Notfound} />
            </Switch>
        </div>
      </Link>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDescription} />
        <Route exact path="/project-proposal" component={ProjectProposal} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
