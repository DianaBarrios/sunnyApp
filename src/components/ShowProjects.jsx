import React from "react";
import { Link } from "react-router-dom";
const firebase = require("../firebase.js");
const db = firebase.db;

class ShowProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  componentDidMount() {
    let projectsRef = db
      .collection("projects")
      .orderBy("projectName")
      .limit(4);

    projectsRef.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        const prevDocs = this.state.docs;
        const newDocuments = [...prevDocs, { ...doc.data(), id: doc.id }];
        this.setState({ docs: newDocuments });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="card-deck my-4" id="projects-list">
          {this.state.docs.map(doc => (
            <div className="card my-4" key={doc.id}>
              <img
                className="card-img-top"
                src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                alt="Cap"
              />
              <div className="card-body">
                <h5 className="card-title">{doc.projectName}</h5>
                <p className="card-text"> {doc.description}</p>
                <Link to={`projects/${doc.segmentID}`}>
                  <button type="button" className="btn btn-primary">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShowProjects;
