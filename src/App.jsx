import React, { useContext, useState, useEffect } from "react";
import styles from "./App.module.css";
import Signup from "./Signup";
import Signin from "./Signin";
import Modal from "./Modal";
import bubbleSrc from "./bubble.svg";
import peopleSrc from "./bubble-people.svg";
import joinProjectSrc from "./join-project.svg";
import proposeProjectSrc from "./propose-project.svg";
import bloodDonationMaskSrc from "./blood-donation-mask.svg";
import anotherMaskSrc from "./another-mask.svg";
import jellySrc from "./jelly.svg";
import logoSrc from "./logo.svg";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./UserProvider";
import { Redirect } from "react-router-dom";
import { auth } from "./firebase.js";

function App() {
  const context = useContext(UserAuthContext);
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  useEffect(() => {
    function close(e) {
      if (e.keyCode === 27) {
        setShowSignup(false);
        setShowSignin(false);
      }
    }

    document.addEventListener("keydown", close, false);

    return function cleanup() {
      document.removeEventListener("keydown", close, false);
    };
  }, []);

  return (
    <>
      <div>
        {showSignup && (
          <Modal>
            <Signup onClick={() => setShowSignup(false)} />
          </Modal>
        )}

        {showSignin && (
          <Modal>
            <Signin onClick={() => setShowSignin(false)} />
          </Modal>
        )}
        <header className={[styles.header, styles.content].join(" ")}>
          <img src={bubbleSrc} className={styles.bubble} />
          <Link to="/">
            <img className={styles.logo} src={logoSrc} alt="Our logo" />
          </Link>
          <div className={styles.auth}>
            {context.user && context.user.firstName && (
              <>
                <span style={{ fontSize: "12px" }}>
                  Hello, {context.user.firstName}
                </span>
                <a onClick={() => auth.signOut()} style={{ fontSize: "12px" }}>
                  Sign out
                </a>
              </>
            )}

            {!context.user && (
              <>
                <a onClick={() => setShowSignin(true)}> Sign in </a>
                <a onClick={() => setShowSignup(true)}> Sign up </a>
              </>
            )}
          </div>
        </header>

        <section className={styles.content}>
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
          className={[styles.pitch, styles.content, styles.paddingAround].join(
            " "
          )}
        >
          <h1> What you can do with Corthropy & FondsFinaz </h1>
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
            <div className={[styles.offer, styles.content].join(" ")}>
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
          <div className={styles.content}>
            <div className={[styles.joinProject, styles.card].join(" ")}>
              <h1>Join an existing project</h1>
              <div className={styles.cards}>
                <div className={[styles.card].join("")}>
                  <div className={styles.cardImg} />
                  <img
                    src={bloodDonationMaskSrc}
                    className={styles.cardImgPath}
                  />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className={[styles.card].join("")}>
                  <div className={styles["cardImg--two"]} />
                  <img
                    src={anotherMaskSrc}
                    className={[styles["cardImgPath--two"]].join(" ")}
                  />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className={[styles.card].join("")}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className={[styles.card].join("")}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer} />
    </>
  );
}

export default App;
