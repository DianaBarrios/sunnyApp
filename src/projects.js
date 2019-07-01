import React from "react";
import { Route, Link } from "react-router-dom";
import { from } from "rxjs";
import ProjectDescription from "./project-description";
const firebase = require("./firebase.js");
const db = firebase.db;

const Project = ({ match }) => <p>{match.params.id}</p>;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  componentDidMount() {
    let projectsRef = db.collection("projects").orderBy("projectName");

    let query = projectsRef.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        const prevDocs = this.state.docs;
        const newDocuments = [...prevDocs, doc.data()];
        this.setState({ docs: newDocuments });
      });
    });
  }

  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h1>Projects</h1>
        <strong>Select a project</strong>
        <ol>
          {this.state.docs.map(doc => (
            <li>
              <Link to={`projects/${doc.segmentID}`} key={doc.id}>
                {" "}
                {doc.projectName}{" "}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Projects;
