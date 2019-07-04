import React, { useContext, useState, useEffect } from "react";
import styles from "./App.module.css";
import Signup from "./Signup";
import Signin from "./Signin";
import Modal from "./Modal";
import bubbleSrc from "./bubble.svg";
import peopleSrc from "./bubble-people.svg";
import joinProjectSrc from "./join-project.svg";
import proposeProjectSrc from "./propose-project.svg";
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
      <div className={styles.content}>
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
        <header className={styles.header}>
          <Link to="/">
            <img
              className={styles.logo}
              src="https://firebasestorage.googleapis.com/v0/b/smiles-ai-images/o/logo_smile.ai.jpg?alt=media&token=ea199bd3-4c7c-47fe-9a58-7c9efd054ce4"
              alt="Our logo"
            />
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
        <div className={styles.pushContent} />
        <div>
          <img src={bubbleSrc} className={styles.bubble} />
          <img src={peopleSrc} className={styles.people} />
        </div>

        <section className={styles.slogan}>
          <h1> We provide the time.</h1>
          <h1> You provide the hands.</h1>
          <p>
            Corthropy wants to make an impact. You too. Let’s do it! Choose from
            the available projects and we’ll give you time off your work week to
            participate. It’s never been easier.
          </p>
        </section>

        <section className={styles.pitch}>
          <h1> What you can do with Corthropy & Fond Finaz </h1>
          <div className={styles.offers}>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={styles.offer}>
                <img src={joinProjectSrc} />
                <h3> Join an existing project </h3>
                <p>
                  Choose from a huge selection and find exactly the project that
                  really suits you
                </p>
              </div>
            </Link>
            <div className={styles.offer}>
              <img src={proposeProjectSrc} />
              <h3> Propose project </h3>
              <p>
                Do you know of a project that you want to support? Tell us more!
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer} />
    </>
  );
}

export default App;
