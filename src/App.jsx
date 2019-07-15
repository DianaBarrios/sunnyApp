import React, { useContext, useState, useEffect } from "react";
import { render } from "react-dom";
import styles from "./App.module.css";
import peopleSrc from "./assets/bubble-people.svg";
import joinProjectSrc from "./assets/join-project.svg";
import Footer from "./components/Footer";
import proposeProjectSrc from "./assets/propose-project.svg";
import waveMaskSrc from "./assets/wave-mask.svg";
import valleyMaskSrc from "./assets/valley-mask.svg";
import Signin from "./Signin";
import Signup from "./Signup";
import jellySrc from "./assets/jelly.svg";
import { Redirect } from "react-router-dom";
import workersSrc from "./assets/workers.svg";
import Header from "./Header";
import { UserAuthContext } from "./UserProvider";
import Modal from "./Modal";



function App() {
  const context = useContext(UserAuthContext);
  const [requestReg, setRequestReg] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [redirectToProjects, setRedirectToProjects] = useState(false);
  const [redirectToProjectProposal, setRedirectToProjectProposal] = useState(
    false
  );

  useEffect(() => {
    function close(e) {
      if (e.keyCode === 27) {
        setOpenSignup(false);
        setOpenSignin(false);
        setRequestReg(false);
      }
    }

    document.addEventListener("keydown", close, false);

    return function cleanup() {
      document.removeEventListener("keydown", close, false);
    };
  }, []);

  if (context.user || redirectToProjects) {
    return <Redirect to="/projects" />;
  }

  if (redirectToProjectProposal) {
    return <Redirect to="/project-proposal" />;
  }

  return (
    <>
      <div>
        <Header />
        {openSignup && (
          <Modal>
            <Signup
              onClick={() => {
                setOpenSignup(false);
                setRequestReg(false);
              }}
            />
          </Modal>
        )}

        {openSignin && (
          <Modal>
            <Signin
              onClick={() => {
                setOpenSignin(false);
                setRequestReg(false);
              }}
            />
          </Modal>
        )}

        {requestReg && (
          <Modal>
            <div className="modall">
              <div
                style={{
                  width: "600px",
                  height: "300px",
                  backgroundColor: "white",
                  textAlign: "center",
                  paddingTop: "45px"
                }}
              >


                <p><h3>Want to participate?</h3></p>

                <div className="container">
                  <h6>In order for you to access the projects, you need to create an account.<br /> Don’t worry, it’s really easy.</h6>
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
                    onClick={() => setOpenSignup(true)}
                  >
                    Sign up
                  </button>
                </div>

                <div className="container mt-4">
                  <h6>Already have an account?</h6>
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
                    onClick={() => setOpenSignin(true)}
                  >
                    Sign in
                  </button>
                </div>

              </div>
            </div>
          </Modal>
        )}
        <section className="content">
          <div className={styles.sloganWrapper}>
            <div className={styles.slogan}>
              <h1> We provide the time.</h1>
              <h1> You provide the hands.</h1>
              <p className="description">
                <i className="fa fa-coffee"></i>Corthropy wants to make an impact. You too?. Let’s do it! Choose
                from the available projects and we’ll give you time off your
                work week to participate. It’s never been easier.
              </p>
            </div>
            <img src={peopleSrc} className={styles.people} />
          </div>
        </section>

        <section
          className={[styles.pitch, "content", styles.paddingAround].join(" ")}
        >
          <h1> What you can do with Corthropy & FondsFinanz </h1>
          <div className={styles.offers}>
            <div
              className={styles.offer}
              onClick={() => {
                if (!context.user) {
                  setRequestReg(true);
                } else {
                  setRedirectToProjects(true);
                }
              }}
            >
              <img src={joinProjectSrc} />
              <h3> Join an existing project </h3>
              <p>
                Choose from a huge selection and find exactly the project that
                really suits you
              </p>
            </div>
            <div className={[styles.offer, "content"].join(" ")} onClick={() => {
              if (!context.user) {
                setRequestReg(true);
              } else {
                setRedirectToProjects(true);
              }
            }}>
              <img src={proposeProjectSrc} />
              <h3> Propose project </h3>
              <p>
                Do you know of a project that you want to support? Tell us more!
              </p>
            </div>
          </div>
          <p className={styles.faqs}>
            Want to know more? Check out our <a href="http://www.corthropy.com/faq/">FAQs</a>.
          </p>
        </section>
        <section className={styles.jellyWrapper}>
          <img className={styles.jelly} src={jellySrc} />
          <div className="content">
            <div className={[styles.joinProject, styles.card].join(" ")}>
              <h1 className="yellowUnderline">Example projects</h1>
              <div className={styles.cards}>
                <div
                  className={[styles.card, styles["card--project"]].join(" ")}
                >
                  <div className={styles.cardImg} />
                  <img
                    src={waveMaskSrc}
                    className={styles["cardImgPath--wave"]}
                  />
                  <h4> Every Weekend · 1.5 hours </h4>
                  <h5> Blood Donation </h5>
                  <p>
                    By donating blood one time, you can help up to three persons survive!
                  </p>
                  <p className={styles.employeesJoined}>
                    16 employees have joined
                  </p>
                </div>
                <div
                  className={[styles.card, styles["card--project"]].join(" ")}
                >
                  <div className={styles["cardImg--two"]} />
                  <img
                    src={valleyMaskSrc}
                    className={[styles["cardImgPath--valley"]].join(" ")}
                  />
                  <h4> 7/3 Sun · 1pm · 4 hours </h4>
                  <h5> The Ocean Cleanup </h5>
                  <p>
                    Plastic and garbage are destroying our oceans. Together we can save
                    them.
                  </p>
                  <p className={styles.employeesJoined}>
                    7 employees have joined
                  </p>
                </div>
                <div
                  className={[styles.card, styles["card--project"]].join(" ")}
                >
                  <div className={styles["cardImg--three"]} />
                  <img
                    src={waveMaskSrc}
                    className={[styles["cardImgPath--wave"]].join(" ")}
                  />
                  <h4> 7/3 Wed · 3pm · 3 hours </h4>
                  <h5> Teaching Kids </h5>
                  <p>
                    You want to help refugee children have a better life?
                    Teach them your trait.
                  </p>
                  <p className={styles.employeesJoined}>
                    13 employees have joined
                  </p>
                </div>
                <div
                  className={[styles.card, styles["card--project"]].join(" ")}
                >
                  <div className={styles["cardImg--four"]} />
                  <img
                    src={valleyMaskSrc}
                    className={[styles["cardImgPath--valley"]].join(" ")}
                  />
                  <h4> 9/13 Mon · 10am · 5 hours </h4>
                  <h5>Tree Planting </h5>
                  <p>
                    Plant trees for a better, healthier world. Come save our future!
                  </p>
                  <p className={styles.employeesJoined}>
                    9 employees have joined
                  </p>
                </div>
              </div>
              <section className={[styles.howItWorks].join(" ")}>
                <h2> How it works </h2>
                <div className={styles.howItWorksSteps}>
                  <div className={styles.howItWorksStep}>
                    <h1>01</h1>
                    <p>Pick a project that excites you</p>
                  </div>

                  <div className={styles.howItWorksStep}>
                    <h1>02</h1>
                    <p>
                      Apply for the project and ask for free time at your company.
                    </p>
                  </div>

                  <div className={styles.howItWorksStep}>
                    <h1>03</h1>
                    <p>When your application is accepted, go change the world!</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className={["content", styles.proposeProject].join(" ")}>
          <h1 className="yellowUnderline"> Propose a project </h1>
          <p>
            We all want to change the world. Do you know of an existing project
            that you want to support? Tell us more and we’ll help you make it a
            reality!
          </p>
          <button
            onClick={() => {
              if (!context.user) {
                setRequestReg(true);
              } else {
                setRedirectToProjectProposal(true);
              }
            }}
          >
            Propose
          </button>
        </section>
        <section className={[styles.howItWorks, "content"].join(" ")}>
          <h2> How it works </h2>
          <div className={styles.howItWorksSteps}>
            <div className={styles.howItWorksStep}>
              <h1>01</h1>
              <p>Tell your company about your idea.</p>
            </div>

            <div className={styles.howItWorksStep}>
              <h1>02</h1>
              <p>Your company will help you make it happen.</p>
            </div>

            <div className={styles.howItWorksStep}>
              <h1>03</h1>
              <p>Your project is listed and now everyone can join!</p>
            </div>
          </div>
        </section>
        <div className="content">
          <img src={workersSrc} className={styles.workers} />
        </div>
      </div>
      <Footer />
    </>
  );
  render(<App />, document.getElementById("root"));
}

export default App;
