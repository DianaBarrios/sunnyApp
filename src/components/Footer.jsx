import React from "react";
import styles from "./Footer.module.css";
import logoWhiteSrc from "./logo_white.png";

function Footer() {
  return (
    <>
      <footer className={styles.nav}>
        <ul>
          <li>
            <a href="http://www.corthropy.com">About</a>
          </li>
          <li>
            <a href="http://www.corthropy.com">Product</a>
          </li>
          <li>
            <a href="http://www.corthropy.com">Team</a>
          </li>
        </ul>
        <img src={logoWhiteSrc} alt="Corthropy logo" />

        <p>2019 All rights reserved</p>
        <p>
          Made with <span>♥</span> by Corthropy
        </p>
      </footer>
    </>
  );
}

export default Footer;
