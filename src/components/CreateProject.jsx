import React from "react";
import { UserAuthContext } from "../UserProvider";
import Modal from "../Modal";
import { Link } from "react-router-dom";
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
      contactNameNGO: "",
      contactEmailNGO: "",
      contactPhoneNGO: "",
      websiteNGO: "",
      status: "",
      segmentID: null,
      isHidden: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
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
      contactNameNGO: this.state.contactNameNGO,
      contactEmailNGO: this.state.contactEmailNGO,
      contactPhoneNGO: this.state.contactPhoneNGO,
      websiteNGO: this.state.websiteNGO,
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
      contactNameNGO: "",
      contactEmailNGO: "",
      contactPhoneNGO: "",
      websiteNGO: "",
      status: "",
      segmentID: null,
      isHidden: false
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addProject}>
          <div class="mt-5 form-group">
            <label for="exampleInputPName">Name of your project</label>
            <input
              type="text"
              name="projectName"
              class="form-control"
              id="exampleInputProjectName"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.projectName}
            />
          </div>

          <div class="mt-4 mb-0 form-group">
            <label for="exampleFormControlTextarea1">
              Description of your project
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Describe the project and the tasks to be performed. Highlight what
              makes your project unique!
            </small>
            <textarea
              name="description"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Goal of your project
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              What is the goal of your project?
            </small>
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
              Requirements for the volunteers
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Are there any limitations or special requirements?{" "}
            </small>
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
              Task of the volunteer
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              What tasks should be performed? Please be as specific as possible.
            </small>
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
              Maximum number of volunteers
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Is there a limited number of volunteers for your project?
            </small>
            <textarea
              name="numVolunteers"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.numVolunteers}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Where does the event takes place?
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Please name the city and if you know, the exact address
            </small>
            <textarea
              name="location"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.location}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Recurrence of your project
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Is your project a regular or a one time event?
            </small>
            <textarea
              name="duration"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.duration}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Duration</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              What's the duration of the event? (e.g. half a day, 2 days)
            </small>
            <textarea
              name="time"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.time}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Name of the organisation
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Is there any club or oganisation (NGO) involved? Please name it!
            </small>
            <textarea
              name="organisation"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.organisation}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              About the organisation
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              If this project is related to an oganisation (NGO), let us know
              about it and who we should contact in case of questions.
            </small>
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

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Website of the organisation
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              We want to know more about the NGO.
            </small>
            <textarea
              name="websiteNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.websiteNGO}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Contact person within the organisation
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Name(s)
            </small>
            <textarea
              name="contactNameNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.contactNameNGO}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Email of the contact person
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Email
            </small>
            <textarea
              name="contactEmailNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.contactEmailNGO}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">
              Phone number of the contact person
            </label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              Phone number
            </small>
            <textarea
              name="contactPhoneNGO"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.contactPhoneNGO}
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

          {!this.state.isHidden && (
            <Modal>
              <div className="modall">
                <div
                  style={{
                    width: "600px",
                    height: "350px",
                    backgroundColor: "white",
                    textAlign: "center",
                    paddingTop: "30px",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  <div className="d-flex bd-highlight">
                    <div className="p-2 w-100 bd-highlight">
                      <h4>Thank you for your proposal!</h4>
                    </div>
                    <div className="p-2 flex-shrink-1 bd-highlight">
                      <button
                        onClick={this.toggleHidden.bind(this)}
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>

                  <div className="container">
                    <p>We will look into the project proposal. You will receive an email when we have made a decision.</p>
                    <Link to={`/projects`}>
                      <button
                        style={{
                          width: "290px",
                          height: "45px",
                          background: "#FE6348",
                          borderRadius: "6px",
                          color: "white",
                          border: 0,
                          zIndex: 2
                        }}
                        onClick={this.toggleHidden.bind(this)}
                      >
                        Back to projects
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </form>
      </div>
    );
  }
}

CreateProject.contextType = UserAuthContext;

export default CreateProject;
