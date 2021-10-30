import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <h1>D</h1>
      </div>
      <div />
      <div className={styles["nav-items-container"]}>
        <ul className={styles["nav-items"]}>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
