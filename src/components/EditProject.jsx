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
            time: "",
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
                    time: project.time,
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
            time,
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
            time,
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
            time,
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
            time,
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
