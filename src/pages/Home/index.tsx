import React from "react";
import { contentSections } from "../../components/content";
import Heading from "../../components/Heading";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["side"]}>
        <ul className={styles["side-list"]}>
          <li>linkedin</li>
          <li>github</li>
          <li>email</li>
        </ul>
      </div>
      <div className={styles["sections-container"]}>
        <section className={styles["top-section"]}>
          <div>
            <p className={styles["top-pretext"]}>Hi, my name is</p>
            <h1 className={styles["top-title"]}>Daniel Liew</h1>
            <p className={styles["top-posttext"]}>
              I build, design, and engineer digital experiences
            </p>
          </div>
        </section>

        {contentSections.map((item, i) => (
          <section key={i} className={styles["content-section"]}>
            <div>
              <Heading num={`0${i + 1}.`} text={item.text} />
              {item.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
