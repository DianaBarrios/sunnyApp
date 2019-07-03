import React from "react";
import "./App.css";
import Signup from "./Signup";
import ShowProjects from "./components/ShowProjects";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="App-header body-content">
            <Signup />
            <p className="text2">
              The Easiest Way to Help <br />
              your Community
            </p>
            <p className="text-secondary">
              You have the opportunity to engage in CSR <br />
              activities very easy with our support.
            </p>
          </div>
        </div>

        <div className="container my-5">
          <div className="container">
            <h1>What you can do with Corthropy </h1>
          </div>

          <div className="row">
            <div className="col">
              <h2>Join a project</h2>
              <p>
                Choose from a huge selection and find exactly the project that
                really suits you!
              </p>
            </div>
            <div className="col">
              <h2>Propose a project</h2>
              <p>
                Do you have some cool idea that you want to support? Tell us
                more!
              </p>
            </div>
          </div>
        </div>

        <div className="App-join py-4">
          <p className="h1">Join a project</p>

          <div className="container my-3">
            <ShowProjects />
          </div>

          <Link to="/projects">See more projects</Link>
        </div>

        <div className="App-section container my-5">
          <h1>Propose a project</h1>

          <div className="container mt-3 mb-5">
            <p>
              We all want to change the world! Do you know about an existing
              project that you want to support or have one of your own? Tell us
              about your project and we'll help you make it a reality!
            </p>
          </div>

          <Link to="/project-proposal">
            <button type="button" className="btn btn-primary btn-lg">
              Start
            </button>
          </Link>
        </div>

        <div className="App-footer container-fluid py-4 pl-4">
          <div className="d-flex flex-row bd-highlight mb-3 text-nav-footer">
            <div className="p-2 bd-highlight">About</div>
            <a href="https://try.corthropy.com/" className="p-2 bd-highlight">
              Product
            </a>
          </div>

          <div className="d-flex bd-highlight">
            <div className="mr-auto p-2 bd-highlight">
              2019 All rights reserved
            </div>
            <div className="ml-auto p-2 bd-highlight">
              Made with love by Smile.AI
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
