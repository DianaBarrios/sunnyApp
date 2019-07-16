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
            recurerrence: "",
            contactNameNGO: "",
            contactEmailNGO: "",
            contactPhoneNGO: "",
            websiteNGO: "",
            status: "",
            segmentID: "",
            pictures: null,
            isHiddenAccept: true,
            isHiddenReject: true
        };
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
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
                    recurerrence: project.recurrence,
                    contactNameNGO: project.contactNameNGO,
                    contactEmailNGO: project.contactEmailNGO,
                    contactPhoneNGO: project.contactPhoneNGO,
                    websiteNGO: project.websiteNGO,
                    status: project.status,
                    segmentID: project.segmentID,
                    pictures: project.pictures,
                    isHiddenAccept: true,
                    isHiddenReject: true
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
            recurerrence,
            contactNameNGO,
            contactEmailNGO,
            contactPhoneNGO,
            segmentID,
            pictures,
            isHiddenAccept,
            isHiddenReject
        } = this.state;

        const updateRef = db.collection('projects').doc(this.state.key);

        updateRef.set({
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
            recurerrence,
            contactNameNGO,
            contactEmailNGO,
            contactPhoneNGO,
            status: "active",
            segmentID,
            pictures: null,
            isHiddenAccept: false,
            isHiddenReject: true
        });
        this.toggleHiddenAccept();
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
            recurerrence,
            contactNameNGO,
            contactEmailNGO,
            contactPhoneNGO,
            segmentID,
            pictures,
            isHiddenAccept,
            isHiddenReject
        } = this.state;

        const updateRef = db.collection('projects').doc(this.state.key);

        updateRef.set({
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
            recurerrence,
            contactNameNGO,
            contactEmailNGO,
            contactPhoneNGO,
            status: "rejected",
            segmentID,
            pictures: null,
            isHiddenAccept: true,
            isHiddenReject: false
        });
        this.toggleHiddenReject();
    }

    render() {
        return (
            <div>
                <Header />

                <div class="container my-5">
                    <h1>Project review</h1>
                </div>

                <div className="container my-5">
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
              name="recurrence"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.recurerrence}
            />
          </div>

          <div class="mt-4 form-group">
            <label for="exampleFormControlTextarea1">Duration</label>
            <small id="emailHelp" class="mb-2 form-text text-muted">
              What's the duration of the event? (e.g. half a day, 2 days)
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
                            className="btn btn-danger btn-lg"
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
                                            <button onClick={this.toggleHiddenReject.bind(this)} type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                            className="btn btn-success btn-lg mx-5"
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
