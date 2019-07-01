import React from 'react';
import logo from './logo.svg';
import './App.css';
import { from } from 'rxjs';
import ShowProjects from './components/ShowProjects';
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="wrapper">
          <div className="App-header body-content">
            <p class="text2">
              The Easiest Way to Help <br />your Community
            </p>
            <p class="text-secondary">
              You have the opportunity to engage in CSR <br />activities very easy with our support.
            </p>
          </div>
        </div>

        <div class="container my-5">
          
          <div class="container">
            <h1>What you can do with Corthropy </h1>
          </div>
        
          <div class="row">
            <div class="column">
              <h2>Join a project</h2>
              <p>Choose from a huge selection and find exactly the project that really suits you!</p>
            </div>
            <div class="column">
              <h2>Propose a project</h2>
              <p>Do you have some cool idea that you want to support? Tell us more!</p>
            </div>
            <div class="column">
              <h2>Spend your time meaningfully </h2>
              <p>With Corthropy you can get involved quickly and easily!</p>
            </div>
          </div>

        </div>

        <div class="App-join py-4">
          <p class="h1">Join a project</p>
          
          <div class="container my-3"> 
            <ShowProjects />
          </div>

          <Link to="/projects">See more projects</Link>
        </div>

        <div class="App-section container my-5">
          <h1>Propose a project</h1>
     
          <div class="container mt-3 mb-5">
          <p>We all want to change the world! Do you know about an existing project that you want to support or have one of your own? Tell us about your project and we'll help you make it a reality!</p>
          </div>
          
          <Link to="/project-proposal">
            <button type="button" class="btn btn-primary btn-lg">Start</button>
          </Link>
        </div>

        <div className="App-footer container-fluid py-4 pl-4">
          <div class="d-flex flex-row bd-highlight mb-3 text-nav-footer">
            <div class="p-2 bd-highlight">About</div>
            <a href="https://try.corthropy.com/" class="p-2 bd-highlight">Product</a>
            <div class="p-2 bd-highlight">Team</div>
          </div>

          <div class="d-flex bd-highlight">
            <div class="mr-auto p-2 bd-highlight">2019  All rights reserved</div>
            <div class="ml-auto p-2 bd-highlight">Made with love by Smile.AI</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
