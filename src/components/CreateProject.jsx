import React from "react";
import { from } from 'rxjs';
const firebase = require("../firebase.js");
const db = firebase.db;

class CreateProject extends React.Component {


  render() {
    /*
    let data = {
      email: 'sunny@email.com',
      name: 'Sunny Chen',
      projectName: 'Help Kids'
    };*/
    
    // Add a new document with a generated id.
    let addDoc = db.collection('projects').add({
      email: 'sunny@email.com',
      name: 'Sunny Chen',
      projectName: 'Help Kids',
      description: 'Make a difference to children in your community.'
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });

    db.collection('projects').add({
      email: 'diana@email.com',
      name: 'Diana Barrios',
      projectName: 'Donate Blood',
      description: 'Save someones life!.You could make a difference.'
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });

    return (
      <div>
        <form>
            <div class="form-group" id="add-project-form">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input type="text" class="form-control" id="exampleInputName" placeholder="Your name" />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Project's name</label>
              <input type="text" class="form-control" id="exampleInputProjectName" placeholder="Name of your project" />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Project's description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us about your project"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            
          </form>
      </div>
    );
  }
}

export default CreateProject;