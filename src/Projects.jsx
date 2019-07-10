import React from "react";
import { Link, Redirect } from "react-router-dom";
import { auth, db } from "./firebase.js";
import Header from "./Header.jsx";
import joinProjectSrc from "./assets/join-project.svg";
import proposeProjectSrc from "./assets/propose-project.svg";
import aliensSrc from "./assets/aliens.svg";
import styles from "./projects.module.css";
import waveMaskSrc from "./assets/wave-mask.svg";
import valleyMaskSrc from "./assets/valley-mask.svg";
import { relative } from "path";
import charlesSrc from "./assets/charles.png";
import Footer from "./components/Footer";
import projectsWaveSrc from "./assets/projects-wave.svg";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      redirectToPropseProject: false
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

  setRedirectToPropseProject() {
    this.setState({ redirectToPropseProject: true });
  }

  render() {
    if (this.state.redirectToPropseProject) {
      return <Redirect to="/project-proposal" />;
    }

    return (
      <>
        <div
          style={{
            zIndex: 2,
            position: "relative"
          }}
        >
          <Header hideBubble={true} logoWhite={true} />
        </div>
        <main className={[styles.main, "content"].join(" ")}>
          <div className={styles.slogan}>
            <h1> Let's make together the world a better place </h1>
            <div className={styles.aliensImageWrap}>
              <img src={aliensSrc} />
            </div>
          </div>
          <section
            className={[styles.pitch, "content", styles.paddingAround].join(
              " "
            )}
          >
            <div className={styles.offers}>
              <div className={styles.offer}>
                <img src={joinProjectSrc} />
                <h3 style={{ color: "black" }}> Join an existing project </h3>
                <p>
                  Choose from a huge selection and find exactly the project that
                  really suits you
                </p>
              </div>
              <div className={[styles.offer, "content"].join(" ")}>
                <img src={proposeProjectSrc} />
                <h3 style={{ color: "black" }}> Propose project </h3>
                <p>
                  Do you know of a project that you want to support? Tell us
                  more!
                </p>
              </div>
            </div>
          </section>
        </main>

        <section
          className="content"
          style={{
            backgroundColor: "#E5E5E5",
            paddingTop: "100px",
            marginTop: "-140px",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <h3
              className={["yellowUnderline"].join(" ")}
              style={{
                color: "black",
                textAlign: "center",
                marginBottom: "50px"
              }}
            >
              Join a Project
            </h3>
            <p
              style={{
                maxWidth: "800px"
              }}
            >
              We as a company support you with 3 volunteering days a year. Just
              select a project you like and register for that. After your boss
              has confirmed your free time, you’ll get a conformation and change
              the world a little bit.
            </p>
          </div>

          <div className={["list-unstyled", styles.cards].join(" ")}>
            {this.state.docs.map((doc, index) => (
              <li
                className={[styles.card, styles["card--project"]].join(" ")}
                key={doc.id}
              >
                <Link
                  to={`projects/${doc.segmentID}`}
                  className={styles.projectLink}
                >
                  <div
                    className={styles.cardImg}
                    style={{
                      backgroundImage: !!doc.pictures
                        ? `url(${doc.pictures[0]})`
                        : ""
                    }}
                  />
                  <img
                    src={index % 2 === 0 ? waveMaskSrc : valleyMaskSrc}
                    className={styles["cardImgPath--wave"]}
                  />

                  <h5 className="mt-0 mb-1" style={{ color: "black" }}>
                    {doc.projectName}
                  </h5>

                  <h6 style={{ color: "#FE6348" }}>{doc.date}</h6>

                  <p>Description: {doc.description.slice(0, 150) + "..."}</p>
                </Link>
              </li>
            ))}
          </div>
        </section>

        <section
          className="content"
          style={{
            marginTop: "80px",
            marginBottom: "80px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <h2
            className="yellowUnderline"
            style={{
              color: "black"
            }}
          >
            Propose a Project
          </h2>
          <p
            style={{
              maxWidth: "800px",
              marginBottom: "50px",
              marginTop: "50px"
            }}
          >
            We all want to change the world! Do you know of an existing project
            that you want to support? Tell us more and we’ll help you make it a
            reality!
          </p>

          <button
            style={{
              width: "290px",
              height: "45px",
              background: "#FE6348",
              borderRadius: "6px",
              color: "white",
              border: 0
            }}
            onClick={() => this.setRedirectToPropseProject(true)}
          >
            Propose
          </button>
        </section>
        <h5
          style={{
            marginTop: "150px",
            textAlign: "center",
            color: "black"
          }}
        >
          Do you have questions? We help you!
        </h5>

        <section
          className="content"
          style={{
            marginTop: "30px",
            marginBottom: "150px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={charlesSrc}
              style={{
                height: "200px",
                margin: "30px"
              }}
            />
            <div
              style={{
                margin: "30px",
                paddingTop: "30px"
              }}
            >
              <h5
                style={{
                  color: "black"
                }}
              >
                Jonas Laimer
              </h5>
              <p>CSR Manager</p>
              <p>Tel: +xx xxx xxxxxx</p>
              <p> Email: xxxxxxxxxx@gmail.com</p>
            </div>
          </div>
        </section>
        <section className="content">
          <img
            src={projectsWaveSrc}
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              maxHeight: "700px"
            }}
          />
        </section>

        <Footer />
      </>
    );
  }
}

export default Projects;
