import React from "react";
const firebase = require("../firebase.js");
const db = firebase.db;

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      projectName: "",
      description: "",
      goal: "",
      location: "",
      organisation: "",
      aboutNGO: "",
      role: "",
      requirements: "",
      numVolunteers: "",
      duration: "",
      time: "",
      status: "",
      segmentID: null
    };
  }

  addProject = e => {
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("projects").add({
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      projectName: this.state.projectName,
      description: this.state.description,
      goal: this.state.goal,
      location: this.state.location,
      organisation: this.state.organisation,
      aboutNGO: this.state.aboutNGO,
      role: this.state.role,
      requirements: this.state.requirements,
      numVolunteers: this.state.numVolunteers,
      duration: this.state.duration,
      time: this.state.time,
      status: "draft",
      segmentID: null
    });
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      projectName: "",
      description: "",
      goal: "",
      location: "",
      organisation: "",
      aboutNGO: "",
      role: "",
      requirements: "",
      numVolunteers: "",
      duration: "",
      time: "",
      status: "",
      segmentID: null
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
            <label for="exampleInputFirstName">First name</label>
            <input
              type="text"
              name="firstName"
              class="form-control"
              id="exampleInputFirstName"
              placeholder="Your first name"
              onChange={this.updateInput}
              value={this.state.firstName}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputLastName">Last name</label>
            <input
              type="text"
              name="lastName"
              class="form-control"
              id="exampleInputLastName"
              placeholder="Your last name"
              onChange={this.updateInput}
              value={this.state.lastName}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPName">Project's name</label>
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
            <label for="exampleFormControlTextarea1">Description</label>
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

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Goal</label>
            <textarea
              name="goal"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="What is the goal of your project"
              onChange={this.updateInput}
              value={this.state.goal}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Location</label>
            <textarea
              name="location"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Please name the city and if you know, the exact address"
              onChange={this.updateInput}
              value={this.state.location}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Organisation</label>
            <textarea
              name="organisation"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Please name the social club/organisation (NGO)"
              onChange={this.updateInput}
              value={this.state.organisation}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              About the Organisation/NGO
            </label>
            <textarea
              name="aboutNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="If this project is related to an NGO let us know about it and the contact information for it"
              onChange={this.updateInput}
              value={this.state.aboutNGO}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Task of the volunteer
            </label>
            <textarea
              name="role"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="What is the task of the volunteer in your project?"
              onChange={this.updateInput}
              value={this.state.role}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Requirements of the volunteer
            </label>
            <textarea
              name="requirements"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Are there any requirements or skills the volunteer has to of the volunteer fullfill? If so, please describe them"
              onChange={this.updateInput}
              value={this.state.requirements}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Number of volunteers
            </label>
            <textarea
              name="numVolunteers"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Is there a limited number of persons who can be part of?"
              onChange={this.updateInput}
              value={this.state.numVolunteers}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Duration</label>
            <textarea
              name="duration"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Is your project a regular or one time event?"
              onChange={this.updateInput}
              value={this.state.duration}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Time</label>
            <textarea
              name="time"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="How long does your project should take?"
              onChange={this.updateInput}
              value={this.state.time}
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
