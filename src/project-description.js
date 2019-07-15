import React from "react";
import JoinProject from "./JoinProject";
import Modal from "./Modal";
import Footer from "./components/Footer";
import { UserAuthContext } from "./UserProvider";
import Header from "./Header";
const firebase = require("./firebase.js");
const db = firebase.db;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      isHidden: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    this.setState({
      isHidden: true
    });
  };

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
                      alt="..."
                      style={{ maxHeight: "200px" }}
                    />
                  ))}
              </div>
            </div>

            <div className="container my-5">
              <div className="row">
                <div className="col-8">
                  <div className="container mt-4">
                    <h1 key={doc.id}>{doc.projectName}</h1>
                    <hr />
                    <h6><i className="fa fa-clock-o" style={{ fontSize: "0.7rem", text-align: "center" }}></i> TIME</h6>
                    <p> {doc.time} </p>
                    <br />
                    <h6><i className="fa fa-map-marker" style={{ fontSize: "0.7rem", textAlign: "center" }}></i> LOCATION</h6>
                    <p> {doc.location} </p>
                    <br />
                    <h6><i className="fa fa-repeat" style={{ fontSize: "0.7rem" }}></i> DURATION</h6>
                    <p> {doc.duration} </p>
                    <br />
                    <h6 style={{textAlign: "bottom"  }}><i className="fa fa-university" style={{ fontSize: "0.7rem", textAlign: "top"  }}></i> ORGANISATION</h6>
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

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
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
                        Apply for project
                      </button>
                      {!this.state.isHidden && (
                        <Modal>
                          <JoinProject onSubmit={this.handleSubmit} />
                        </Modal>
                      )}
                    </div>
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
