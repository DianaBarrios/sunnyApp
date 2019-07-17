import React from "react";
import Footer from "./Footer";
import Header from "../Header";
import Modal from "../Modal";
import { Link } from "react-router-dom";
const firebase = require("../firebase.js");
const db = firebase.db;

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
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
      recurrence: "",
      contactNameNGO: "",
      contactEmailNGO: "",
      contactPhoneNGO: "",
      websiteNGO: "",
      status: "",
      isHiddenAccept: true,
      isHiddenReject: true,
      isHiddenUpdate: true
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleHiddenAccept() {
    this.setState({
      isHiddenAccept: !this.state.isHiddenAccept
    });
  }

  toggleHiddenReject() {
    this.setState({
      isHiddenReject: !this.state.isHiddenReject
    });
  }

  toggleHiddenUpdate() {
    this.setState({
      isHiddenUpdate: !this.state.isHiddenUpdate
    });
  }

  componentDidMount() {
    let id = Number(this.props.match.params.id);
    let projectsRef = db.collection('projects');
    let query = projectsRef.where('segmentID', '==', id);

    query.get().then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching project.');
        return;
      }
      snapshot.forEach(doc => {
        const project = doc.data();
        this.setState({
          key: doc.id,
          projectName: project.projectName,
          description: project.description,
          goal: project.goal,
          location: project.location,
          organisation: project.organisation,
          aboutNGO: project.aboutNGO,
          role: project.role,
          requirements: project.requirements,
          numVolunteers: project.numVolunteers,
          duration: project.duration,
          recurrence: project.recurrence,
          contactNameNGO: project.contactNameNGO,
          contactEmailNGO: project.contactEmailNGO,
          contactPhoneNGO: project.contactPhoneNGO,
          websiteNGO: project.websiteNGO,
          status: project.status
        })
      });
    }).catch(err => {
      console.log("Error getting the project", err);
    })
  }

  handleChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({
      project: state
    });
  }

  handleAccept(e) {
    e.preventDefault();

    const {
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO
    } = this.state;

    const updateRef = db.collection('projects').doc(this.state.key);

    updateRef.update({
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO,
      status: "active"
    });
    this.toggleHiddenAccept();
    console.log("Project accepted");
  }

  handleReject(e) {
    e.preventDefault();

    const {
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO
    } = this.state;

    const updateRef = db.collection('projects').doc(this.state.key);

    updateRef.update({
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO,
      status: "rejected"
    });
    this.toggleHiddenReject();
    console.log("Project rejected");
  }

  handleUpdate(e) {
    e.preventDefault();
    const {
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO
    } = this.state;

    const updateRef = db.collection('projects').doc(this.state.key);

    updateRef.update({
      projectName,
      description,
      goal,
      location,
      organisation,
      aboutNGO,
      role,
      requirements,
      numVolunteers,
      duration,
      recurrence,
      contactNameNGO,
      contactEmailNGO,
      contactPhoneNGO,
      websiteNGO
    });
    this.toggleHiddenUpdate();
    console.log("Project updated");
  }


  render() {
    return (
      <div>
        <Header />

        <div className="container my-5">
          <h1>Project review</h1>
        </div>

        <div className="container my-5">
          <form onSubmit={this.addProject}>
            <div className="mt-5 form-group">
              <input
                type="text"
                name="projectName"
                className="form-control"
                id="exampleInputProjectName"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.projectName}
              />
            </div>

            <hr />

            <div class="mt-4 form-group">
              <h6><i className="fa fa-clock-o"
                style={{ fontSize: "0.7rem" }}
              />{" "} DURATION </h6>
              <input
                name="duration"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.duration}
              />

            </div>

            <div className="mt-4 form-group">
              <h6>
                <i
                  className="fa fa-map-marker"
                  style={{ fontSize: "0.7rem" }}
                />{" "}
                LOCATION
                    </h6>
              <input
                name="location"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.location}
              />
            </div>

            <div className="mt-4 form-group">
              <h6>
                <i
                  className="fa fa-repeat"
                  style={{ fontSize: "0.7rem" }}
                />{" "}
                RECURRENCE
                    </h6>
              <input
                name="recurrence"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.recurrence}
              />
            </div>

            <div className="mt-4 form-group">
              <h6 style={{ textAlign: "bottom" }}>
                <i
                  className="fa fa-university"
                  style={{ fontSize: "0.7rem", textAlign: "top" }}
                />{" "}
                ORGANISATION
                    </h6>
              <input
                name="organisation"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.organisation}
              />
            </div>

            <hr />

            <div className="mt-4 form-group">
              <h6> GOAL OF THE PROJECT </h6>
              <textarea
                name="goal"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.goal}
              />
            </div>

            <div className="mt-4 form-group">
              <h6> YOUR ROLE AS A VOLUNTEER </h6>
              <textarea
                name="role"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.role}
              />
            </div>

            <div class="mt-4 form-group">
              <h6> REQUIREMENTS </h6>
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
              <h6>ABOUT THE NON-PROFIT ORGANISATION</h6>
              <textarea
                name="aboutNGO"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.aboutNGO}
              />
            </div>

            < hr />

            <h2>Additional information</h2>

            <div class="mt-4 form-group">
              <label for="exampleFormControlTextarea1">
                CONTACT PERSON WITHIN THE NGO
            </label>
              <input
                name="contactNameNGO"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.contactNameNGO}
              />
            </div>

            <div class="mt-4 form-group">
              <label for="exampleFormControlTextarea1">
                EMAIL OF CONTACT PERSON
            </label>
              <input
                name="contactEmailNGO"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.contactEmailNGO}
              />
            </div>

            <div class="mt-4 form-group">
              <label for="exampleFormControlTextarea1">
                PHONE NUMBER OF CONTACT PERSON
            </label>
              <input
                name="contactPhoneNGO"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.contactPhoneNGO}
              />
            </div>

            <div class="mt-4 form-group">
              <label for="exampleFormControlTextarea1">
                WEBSITE OF THE NGO
            </label>
              <input
                name="websiteNGO"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.websiteNGO}
              />
            </div>

            <div class="mt-4 form-group">
              <label for="exampleFormControlTextarea1">
                MAXIMUM NUMBER OF PARTICIPANTS
            </label>
              <input
                name="numVolunteers"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.numVolunteers}
              />
            </div>


            <div class="mt-4 mb-4 form-group">
              <label for="exampleFormControlTextarea1">
                DESCRIPTION OF PROJECT
            </label>
              <textarea
                name="description"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-lg"
              onClick={e => this.handleUpdate(e)}
            >
              Update
          </button>
          {!this.state.isHiddenUpdate && (<Modal>
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
                    <div className="p-2 w-100 bd-highlight"><h4>Project updated</h4></div>
                    <div className="p-2 flex-shrink-1 bd-highlight">
                      <button onClick={this.toggleHiddenUpdate.bind(this)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>

                  <div className="container">
                    <p>Don’t forget to Accept it or Reject it!</p>
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
                        onClick={this.toggleHiddenUpdate.bind(this)}
                      >
                        Go back to projects
                        </button>
                    </Link>
                  </div>

                </div>
              </div>
            </Modal>
            )}

            <button
              type="submit"
              className="btn btn-danger btn-lg mx-3"
              onClick={e => this.handleReject(e)}
            > Reject
                        </button>
            {!this.state.isHiddenReject && (<Modal>
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
                    <div className="p-2 w-100 bd-highlight"><h4>Project rejected</h4></div>
                    <div className="p-2 flex-shrink-1 bd-highlight">
                      <button onClick={this.toggleHiddenReject.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>

                  <div className="container">
                    <p>Let the employee know about this.</p>
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
                        onClick={this.toggleHiddenReject.bind(this)}
                      >
                        Go back to projects
                        </button>
                    </Link>
                  </div>

                </div>
              </div>
            </Modal>
            )}

            <button
              type="submit"
              className="btn btn-success btn-lg"
              onClick={e => this.handleAccept(e)}
            > Accept
                        </button>

            {!this.state.isHiddenAccept && (<Modal>
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
                    <div className="p-2 w-100 bd-highlight"><h4>Project accepted</h4></div>
                    <div className="p-2 flex-shrink-1 bd-highlight">
                      <button onClick={this.toggleHiddenAccept.bind(this)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>

                  <div className="container">
                    <p>Project is now visible for all employees.</p>
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
                        onClick={this.toggleHiddenAccept.bind(this)}
                      >
                        Go back to projects
                        </button>
                    </Link>
                  </div>

                </div>
              </div>
            </Modal>
            )}
          </form>
        </div>
        <Footer />
      </div>

    );
  }
}

export default EditProject;
