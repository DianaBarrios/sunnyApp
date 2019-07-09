import React from "react";
import styles from "./App.module.css";
import peopleSrc from "./assets/bubble-people.svg";
import joinProjectSrc from "./assets/join-project.svg";
import proposeProjectSrc from "./assets/propose-project.svg";
import waveMaskSrc from "./assets/wave-mask.svg";
import valleyMaskSrc from "./assets/valley-mask.svg";
import { Link } from "react-router-dom";
import jellySrc from "./assets/jelly.svg";
import { Redirect } from "react-router-dom";
import workersSrc from "./assets/workers.svg";
import Header from "./Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <section className="content">
          <div className={styles.sloganWrapper}>
            <div className={styles.slogan}>
              <h1> We provide the time.</h1>
              <h1> You provide the hands.</h1>
              <p className="description">
                Corthropy wants to make an impact. You too. Let’s do it! Choose
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
            <div className={styles.offer}>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img src={joinProjectSrc} />
                <h3> Join an existing project </h3>
                <p>
                  Choose from a huge selection and find exactly the project that
                  really suits you
                </p>
              </Link>
            </div>
            <div className={[styles.offer, "content"].join(" ")}>
              <img src={proposeProjectSrc} />
              <h3> Propose project </h3>
              <p>
                Do you know of a project that you want to support? Tell us more!
              </p>
            </div>
          </div>
          <p className={styles.faqs}>
            Want to know more? Check out our <Link to="/faqs">FAQs</Link>.
          </p>
        </section>
        <section className={styles.jellyWrapper}>
          <img className={styles.jelly} src={jellySrc} />
          <div className="content">
            <div className={[styles.joinProject, styles.card].join(" ")}>
              <h1 className={styles.yellowUnderline}>Example projects</h1>
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
                    Give blood and help with one donation up to three humans to
                    survive.
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
                    Plastic and garbage are destroying our oceans. We will save
                    them together.
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
                    You want to help refugee children to make their way in life?
                    Teach them.
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
                    Planting trees for a better and more healthier world to save
                    our future.
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
                    <p>Pick a project which you feel excited about</p>
                  </div>

                  <div className={styles.howItWorksStep}>
                    <h1>02</h1>
                    <p>
                      Choose the date and ask for free time from your company
                    </p>
                  </div>

                  <div className={styles.howItWorksStep}>
                    <h1>03</h1>
                    <p>Get confirmation and be part of the community</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className={["content", styles.proposeProject].join(" ")}>
          <h1 className={styles.yellowUnderline}> Propose a project </h1>
          <p>
            We all want to change the world! Do you know of an existing project
            that you want to support? Tell us more and we’ll help you make it a
            reality!
          </p>
          <button>Propose </button>
        </section>
        <section className={[styles.howItWorks, "content"].join(" ")}>
          <h2> How it works </h2>
          <div className={styles.howItWorksSteps}>
            <div className={styles.howItWorksStep}>
              <h1>01</h1>
              <p>Fill up a form and tell your company about your idea.</p>
            </div>

            <div className={styles.howItWorksStep}>
              <h1>02</h1>
              <p>Your company is checking how they can support it.</p>
            </div>

            <div className={styles.howItWorksStep}>
              <h1>03</h1>
              <p>Project is listed and you are part of the community</p>
            </div>
          </div>
        </section>
        <div className="content">
          <img src={workersSrc} className={styles.workers} />
        </div>
      </div>

      <footer className={styles.footer} />
    </>
  );
}

export default App;
