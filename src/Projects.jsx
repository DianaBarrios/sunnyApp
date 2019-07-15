import React from "react";
import { Link, Redirect } from "react-router-dom";
import { db } from "./firebase.js";
import Header from "./Header.jsx";
import joinProjectSrc from "./assets/join-project.svg";
import proposeProjectSrc from "./assets/propose-project.svg";
import aliensSrc from "./assets/aliens.svg";
import styles from "./projects.module.css";
import waveMaskSrc from "./assets/wave-mask.svg";
import valleyMaskSrc from "./assets/valley-mask.svg";
import charlesSrc from "./assets/simon.jpg";
import Footer from "./components/Footer";
import projectsWaveSrc from "./assets/projects-wave.svg";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      redirectToProposeProject: false
    };
  }

  componentDidMount() {
    document.getElementById("root").scrollTo(0, 0);
    
    let projectsRef = db
      .collection("projects")
      .where("status", "==", "active")
      .limit(4);

    projectsRef.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        const prevDocs = this.state.docs;
        const newDocuments = [...prevDocs, { ...doc.data(), id: doc.id }];
        this.setState({ docs: newDocuments });
      });
    });
  }

  setRedirectToProposeProject() {
    this.setState({ redirectToProposeProject: true });
  }

  render() {
    if (this.state.redirectToProposeProject) {
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
            <h1> Let's make the world a better place </h1>
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
                <img src={joinProjectSrc} alt="join"/>
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
              We want you to help the world and make an impact.
              That's why we give you 3 extra off-days every year so you can participate in any CSR project.
              Just select one from the list, or propose your own, and ask your boss for permission.
              We'll take care of the rest.
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

                  <h6 style={{ color: "#FE6348" }}>{doc.time}</h6>

                  <p> {doc.description.slice(0, 150) + "..."}</p>
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
              border: 0,
              zIndex: 2
            }}
            onClick={() => this.setRedirectToProposeProject()}
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
          Do you have questions? We have answers!
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
                Simon Bödecker
              </h5>
              <p>CSR Manager</p>
              <p>Tel: +49 89 158815406</p>
              <p> Email: s.boedecker@fondsfinanz.de</p>
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
