import React from "react";
import { UserAuthContext } from "../UserProvider";
const firebase = require("../firebase.js");
const db = firebase.db;

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addProject = e => {
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("projects").add({
      email: this.context.user.email,
      firstName: this.context.user.firstName,
      lastName: this.context.user.lastName,
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
      status: "pending",
      segmentID: null
    });
    this.setState({
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

  render() {
    return (
      <div>
        <form onSubmit={this.addProject}>
          <div class="form-group">
            <label for="exampleInputPName">Project's name</label>
            <input
              type="text"
              name="projectName"
              class="form-control"
              id="exampleInputProjectName"
              placeholder="Name of your project"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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

CreateProject.contextType = UserAuthContext;

export default CreateProject;
