import React from "react";
import Footer from "./Footer";
import Header from "../Header";
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
            status: ""
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    }

    handleReject(e){
        
    }

    handleEdit(e) {
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
            status
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
            status
        }).then((docRef) => {
            this.setState({
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
                status: ""
            });
        }).catch((error) => {
            console.error("Error updating document", error);
        });

    }

    render() {
        return (
            <div>

                <Header />

                <div class="container my-5">
                    <h1>Edit project</h1>
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
                            class="btn btn-primary"
                            onClick={e => this.handleEdit(e)}
                        >
                            Edit
          </button>

          <button
                            type="submit"
                            class="btn btn-danger"
                            onClick={e => this.handleReject(e)}
                        >
                            Reject
          </button>

          <button
                            type="submit"
                            class="btn btn-success"
                            onClick={e => this.handleAccept(e)}
                        >
                            Accept
          </button>
                    </form>


                </div>

                <Footer />

            </div>

        );
    }
}

//EditProject.contextType = UserAuthContext;

export default EditProject;