import React from 'react';
import logo from './logo.svg';
import './App.css';
import { from } from 'rxjs';
import CreateProject from './components/CreateProject';
import ShowProjects from './components/ShowProjects';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class ="wrapper">
          <div class = "logo py-4 px-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/smiles-ai-images/o/logo_smile.ai.jpg?alt=media&token=ea199bd3-4c7c-47fe-9a58-7c9efd054ce4" class="float-left" alt="Our logo"/>
          </div>
          <div className="App-header body-content">
            <p class="text2">
              The Easiest Way to Help <br/>your Community
            </p>
            <p class="text-secondary">
              You have the opportunity to engage in CSR <br/>activities very easy with our support.
            </p>
          </div>
        </div>
        <div class="container my-5">
          <h1>What you can do with Corthropy </h1>
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
            <p>With SmilesAI you can get involved quickly and easily!</p>
          </div>
        </div>
        </div>
        <div class="container my-5">
          <h1>Join a project</h1>
          <ShowProjects />
        </div>
        <div class="container my-5">
          <h1>Propose a project</h1>
          <blockquote class="blockquote my-4">
            <p class="mb-0">We all want to change the world! Do you know about an existing project that you want to support or have one of your own? Tell us about your project and we'll help you make it a reality!</p>
          </blockquote>
          <button type="button my-5" class="btn btn-primary btn-lg btn-block">Start</button>
        </div>

        <div class="container my-5">
          <CreateProject />
        </div>

      </div>
    );
  }
}

export default App;
