import React from "react";
import { Link } from "react-router-dom";
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
    let projectsRef = db.collection("projects").orderBy('projectName');

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

        <div class="container">
          <h1>Projects</h1>
          <strong>Select a project</strong>
        </div>

        <div class="container">
          <ul class="list-unstyled">
            {this.state.docs.map(doc => (
              <li class="media my-3">
                <img src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" class="align-self-center mr-3" alt="..."></img>
                <div class="media-body">
                  <Link to={`projects/${doc.segmentID}`} key={doc.id}>
                    <h5 class="mt-0 mb-1"> {doc.projectName} </h5>
                  </Link>
                  <p>Contact: {doc.email}</p>
                  <p>Organizer: {doc.firstName} {doc.lastName}</p>
                  <p>Description: {doc.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default Projects;