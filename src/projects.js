import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase.js";
import Header from "./Header.jsx";
import aliensSrc from "./assets/aliens.svg";
import styles from "./projects.module.css";
import { relative } from "path";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  componentDidMount() {
    let projectsRef = db.collection("projects").orderBy("projectName");

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
      <>
        <div
          style={{
            zIndex: 2,
            position: "relative"
          }}
        >
          <Header hideBubble={true} />
        </div>
        <main className={[styles.main, "content"].join(" ")}>
          <div className={styles.slogan}>
            <h1> Let's make together the world a better place </h1>
            <div className={styles.aliensImageWrap}>
              <img src={aliensSrc} />
            </div>
          </div>
        </main>

        <div className="container">
          <ul className="list-unstyled">
            {this.state.docs.map(doc => (
              <li className="media my-3" key={doc.id}>
                <img
                  src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg"
                  className="align-self-center mr-3"
                  alt="..."
                />
                <div className="media-body">
                  <Link to={`projects/${doc.segmentID}`}>
                    <h5 className="mt-0 mb-1"> {doc.projectName} </h5>
                  </Link>
                  <p>Contact: {doc.email}</p>
                  <p>
                    Organizer: {doc.firstName} {doc.lastName}
                  </p>
                  <p>Description: {doc.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Projects;
