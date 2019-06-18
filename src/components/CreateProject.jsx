import React from "react";
import { from } from "rxjs";
const firebase = require("../firebase.js");
const db = firebase.db;

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      projectName: "",
      description: ""
    };
  }

  addProject = e => {
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    const projectRef = db.collection("projects").add({
      email: this.state.email,
      name: this.state.name,
      projectName: this.state.projectName,
      description: this.state.description
    });
    this.setState({
      email: "",
      name: "",
      projectName: "",
      description: ""
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addProject}>
          <div class="form-group" id="add-project-form">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.updateInput}
              value={this.state.email}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputName"
              placeholder="Your name"
              onChange={this.updateInput}
              value={this.state.name}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Project's name</label>
            <input
              type="text"
              name="projectName"
              class="form-control"
              id="exampleInputProjectName"
              placeholder="Name of your project"
              onChange={this.updateInput}
              value={this.state.projectName}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Project's description
            </label>
            <textarea
              name="description"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Tell us about your project"
              onChange={this.updateInput}
              value={this.state.description}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={e => this.addProject(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
