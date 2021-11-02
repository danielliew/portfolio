import React from "react";
import { contentSections } from "../content";
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
          {contentSections.map(({ navText }, i) => (
            <li key={i}>{navText}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
