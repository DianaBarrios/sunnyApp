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
          <div class="mt-5 form-group">
            <label for="exampleInputPName">Name of the project</label>
            <input
              type="text"
              name="projectName"
              class="form-control"
              id="exampleInputProjectName"
              placeholder="Listing title"
              onChange={this.handleChange}
              value={this.state.projectName}
            />
          </div>

          <div class="mt-4 mb-0 form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Describe the project and the work that will be performed. You can highlight what’s special about your cool idea!</small> 
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

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Goal</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">What is the goal of your project?</small> 
            <textarea
              name="goal"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.goal}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Task of the volunteer
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">What tasks should the carried out? Please be as specific as possible.</small>
            <textarea
              name="role"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.role}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Requirements of the volunteer
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Are there any limitations or special requirements? </small> 
            <textarea
              name="requirements"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.requirements}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Number of volunteers
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Is there a limited number of persons who can be part of?</small> 
            <textarea
              name="numVolunteers"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.numVolunteers}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Location</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Please name the city and if you know, the exact address</small> 
            <textarea
              name="location"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="e.g. Stiftung St. Zeno Berufsbildungswerk Kirchseeon"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Duration</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Is your project a regular or one time event?</small> 
            <textarea
              name="duration"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.duration}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Time</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">How long does your project should take?</small> 
            <textarea
              name="time"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.time}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Organisation</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">Please name the social club/organisation (NGO)</small> 
            <textarea
              name="organisation"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.organisation}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              About the Organisation/NGO
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">If this project is related to an NGO let us know about it and the contact information for it</small> 
            <textarea
              name="aboutNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.aboutNGO}
            />
          </div>

          <button
            type="submit"
            onClick={e => this.addProject(e)}
            style={{
              width: "290px",
              height: "45px",
              background: "#FE6348",
              borderRadius: "6px",
              color: "white",
              border: 0,
              zIndex: 2,
              alignSelf: "center"
            }}

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
