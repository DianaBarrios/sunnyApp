import React from "react";
import Modal from "./Modal";
import Footer from "./components/Footer";
import { UserAuthContext } from "./UserProvider";
import Header from "./Header";
import { Link } from "react-router-dom";
const firebase = require("./firebase.js");
const db = firebase.db;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      message: "",
      isHidden: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount() {
    const close = e => {
      if (e.keyCode === 27) {
        this.setState({ isHidden: true });
      }
    };

    document.addEventListener("keydown", close, false);

    let id = Number(this.props.match.params.id);
    let projectsRef = db.collection("projects").where("segmentID", "==", id);

    projectsRef.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        const prevDocs = this.state.docs;
        const newDocuments = [...prevDocs, doc.data()];
        this.setState({ docs: newDocuments });
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let id = Number(this.props.match.params.id);

    const data = {
      first_name: this.context.user.firstName,
      last_name: this.context.user.lastName,
      email: this.context.user.email,
      message: this.state.message,
      segment_id: id
    };

    let first_name = data.first_name;
    let last_name = data.last_name;
    let email = data.email;
    let message = data.message;
    let segment_id = data.segment_id;

    const url =
      "https://us-central1-smiles-ai.cloudfunctions.net/subscribeUserToProject";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        message,
        segment_id
      })
    };

    fetch(url, options);

    this.setState({
      message: "",
      isHidden: false
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.docs.map(doc => (
          <div style={{ marginTop: "50px" }}>
            <div className="container">
              <div className="d-flex justify-content-around">
                {doc.pictures &&
                  Object.values(doc.pictures).map(url => (
                    <img
                      src={url}
                      className="img-fluid"
                      alt="project-desc"
                      style={{ maxHeight: "200px" }}
                    />
                  ))}
              </div>
            </div>

            <div className="container my-5">
              <div className="row ml-3">
                <h1 key={doc.id}>{doc.projectName}</h1>
              </div>

              <div className="row">
                <div className="col-10">
                  <div className="container mt-4">
                    <hr />
                    <h6>
                      <i
                        className="fa fa-clock-o"
                        style={{ fontSize: "0.7rem" }}
                      />{" "}
                      DURATION
                    </h6>
                    <p> {doc.duration} </p>
                    <br />
                    <h6>
                      <i
                        className="fa fa-map-marker"
                        style={{ fontSize: "0.7rem" }}
                      />{" "}
                      LOCATION
                    </h6>
                    <p> {doc.location} </p>
                    <br />
                    <h6>
                      <i
                        className="fa fa-repeat"
                        style={{ fontSize: "0.7rem" }}
                      />{" "}
                      RECURRENCE
                    </h6>
                    <p> {doc.recurrence} </p>
                    <br />
                    <h6 style={{ textAlign: "bottom" }}>
                      <i
                        className="fa fa-university"
                        style={{ fontSize: "0.7rem", textAlign: "top" }}
                      />{" "}
                      ORGANISATION
                    </h6>
                    <p> {doc.organisation} </p>
                    <br />
                    <hr />
                    <h6> GOAL OF THE PROJECT </h6>
                    <p>{doc.goal}</p>
                    <br />
                    <h6> YOUR ROLE AS A VOLUNTEER </h6>
                    <p>{doc.role}</p>
                    <br />
                    <h6> REQUIREMENTS </h6>
                    <p> {doc.requirements} </p>
                    <br />
                    <hr />
                    <h6>ABOUT THE NON-PROFIT ORGANISATION</h6>
                    <p> {doc.aboutNGO} </p>
                    <br />
                    <hr />
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="card mt-4 ml-5">
                  <div className="card-body">
                    <label className="text-muted">Optional</label>
                    <textarea
                      className="form-control mb-3"
                      id="textArea"
                      rows="3"
                      placeholder="If you want to participate with colleagues please write their names"
                      name="message"
                      value={this.state.message}
                      onChange={e => this.handleChange(e)}
                    />
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
                      onClick={e => this.handleSubmit(e)}
                    > Apply for project </button>
                    {!this.state.isHidden && (
                      <Modal>
                        <div className="modall">
                          <div
                            style={{
                              width: "600px",
                              height: "350px",
                              backgroundColor: "white",
                              textAlign: "center",
                              paddingTop: "50px",
                              paddingLeft: "20px",
                              paddingRight: "20px"
                            }}
                          >
                            <div className="d-flex bd-highlight">
                              <div className="p-2 w-100 bd-highlight">
                                <h4>Thanks for applying!</h4>
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
                              <p>
                                We will get in touch with you soon to give you
                                  further information about the event. <br />{" "}
                                You’ll receive an email with the date and time
                                of the event.
                                </p>
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
                                  className="mt-3"
                                >
                                  Go back to projects
                                  </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        ))}
      </div>
    );
  }
}

Project.contextType = UserAuthContext;

export default Project;