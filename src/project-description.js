import React, { useContext, useState, useEffect } from "react";
import JoinProject from "./JoinProject";
import Modal from "./Modal";
import Footer from "./components/Footer";
import { UserAuthContext } from "./UserProvider";
import { withRouter } from "react-router-dom";
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
                    <h6>TIME</h6>
                    <p> {doc.time} </p>
                    <hr />
                    <h6>WHEN</h6>
                    <p> {doc.date} </p>
                    <h6>WHERE</h6>
                    <p> {doc.location} </p>
                    <hr />
                    <h6> REQUIREMENTS </h6>
                    <p> {doc.requirements} </p>
                    <hr />
                    <h5> GOAL OF THE PROJECT </h5>
                    <p>{doc.description}</p>
                    <hr />
                    <h5> YOUR ROLE AS A VOLUNTEER </h5>
                    <p>{doc.role}</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <button
                        onClick={this.toggleHidden.bind(this)}
                        className="btn btn-danger btn-lg btn-block mt-3 mb-4"
                      >
                        Request off-days
                      </button>
                      {!this.state.isHidden && (
                        <Modal>
                          <JoinProject />
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
        {this.state.showModal ? (
          <Modal closeModal={this.toggleModal.bind(this)} />
        ) : null}
      </div>
    );
  }
}

Project.contextType = UserAuthContext;

export default Project;
