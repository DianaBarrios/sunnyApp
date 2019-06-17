import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        <div class="card-deck mt-5">
          <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                    alt="Cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Help this kid!</h5>
                    <p class="card-text">Make a difference to children in your community.</p>
                    <a
                      href=""
                      class="btn btn-primary"
                    >
                      Read more
                    </a>
                  </div>
              </div>

              <div class="card mt-4">
                  <img
                    class="card-img-top"
                    src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                    alt="Cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Help this kid!</h5>
                    <p class="card-text">Make a difference to children in your community.</p>
                    <a
                      href=""
                      class="btn btn-primary"
                    >
                      Read more
                    </a>
                  </div>
              </div>
        </div>
      </div>

      <div class="container my-5">
        <h1>Propose a project</h1>
        <blockquote class="blockquote my-4">
          <p class="mb-0">We all want to change the world! Do you know about an existing project that you want to support or have one of your own? Tell us about your project and we'll help you make it a reality!</p>
        </blockquote>
        <button type="button my-5" class="btn btn-primary btn-lg btn-block">Start</button>
      </div>
      
    </div>
    );
  }
}

export default App;
