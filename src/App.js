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
        <header className="App-header">
          <p class="text-primary">
            This is the landing page.
        </p>
        </header>

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
