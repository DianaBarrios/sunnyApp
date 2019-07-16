import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "./UserProvider";
import styles from "./header.module.css";
import bubbleSrc from "./assets/bubble.svg";
import Signup from "./Signup";
import logoSrc from "./assets/logo.svg";
import logoWhiteSrc from "./components/logo_white.png";
import { auth } from "./firebase.js";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import Modal from "./Modal";

export default function Header(props) {
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
      <header className={[styles.header, "content"].join(" ")}>
        {!props.hideBubble && <img src={bubbleSrc} className={styles.bubble} />}
        <Link to="/">
          <img
            className={styles.logo}
            src={props.logoWhite ? logoWhiteSrc : logoSrc}
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
              <a onClick={() => setShowSignin(true)}> Log in </a>
              <a onClick={() => setShowSignup(true)}> Sign up </a>
            </>
          )}
        </div>
      </header>
    </>
  );
}
