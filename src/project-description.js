import React from "react";
import Popup from "./components/Popup";
const firebase = require("./firebase.js");
const db = firebase.db;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
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
        {this.state.docs.map(doc => (
          <div>
            <div className="container">
              <div className="d-flex justify-content-around">
                <img
                  src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <img
                  src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <img
                  src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>

            <div className="container my-5">
              <div className="row">
                <div className="col-8">
                  <div className="container mt-4">
                    <h1 key={doc.id}>{doc.projectName}</h1>
                    <p>Contact: {doc.email}</p>
                    <p>
                      Organizer: {doc.firstName} {doc.lastName}
                    </p>
                    <p>Description of project: {doc.description}</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <button
                        onClick={this.togglePopup.bind(this)}
                        className="btn btn-danger btn-lg btn-block mt-3 mb-4"
                      >
                        {" "}
                        Apply now
                      </button>
                      <h5 className="card-title text-warning">TIME</h5>
                      <p className="card-text">Some quick example</p>
                      <h5 className="card-title  text-warning">WHEN</h5>
                      <p className="card-text">Some quick example</p>
                      <h5 className="card-title text-warning">WHERE</h5>
                      <p className="card-text">Some quick example</p>
                      <h5 className="card-title  text-warning">REQUIREMENTS</h5>
                      <p className="card-text">Some quick example</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container my-5">
              <div className="row">
                <div className="col">Testimony</div>
                <div className="col">Space to ask questions</div>
              </div>
            </div>

            <div className="container my-5">
              <div className="row justify-content-md-center">
                <div className="col-md-auto">Recommend to a friend.</div>
              </div>
            </div>

            <div className="App-footer container-fluid py-4 pl-4">
              <div className="d-flex flex-row bd-highlight mb-3 text-nav-footer">
                <div className="p-2 bd-highlight">About</div>
                <a
                  href="https://try.corthropy.com/"
                  className="p-2 bd-highlight"
                >
                  Product
                </a>
              </div>

              <div className="d-flex bd-highlight">
                <div className="mr-auto p-2 bd-highlight">
                  2019 All rights reserved
                </div>
                <div className="ml-auto p-2 bd-highlight">
                  Made with love by Smile.AI
                </div>
              </div>
            </div>

            {this.state.showPopup ? (
              <Popup closePopup={this.togglePopup.bind(this)} />
            ) : null}
          </div>
        ))}
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Project;
