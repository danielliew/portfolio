import React from "react";
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

        <section className={styles["content-section"]}>
          <div>
            <Heading num="01." text="About Me" />
            <p>
              Hello! My name is Daniel and I'm a Junior at Rollins College in
              the picturesque city of Winter Park, FL.
              <br />
              <br />
              I love building websites and mobile applications that positively
              impact the world around me and improve the daily lives of others.
              I've always taken a keen interest towards problem solving and
              creative thinking. From building elegant and powerful frontend
              designs to complex and functional backend APIs, I want to use
              programming as a creative medium for bringing purposeful ideas to
              fruition.
              <br />
              <br />
              I've had the priveledge of interning at `one of Malaysia's leading
              conglomerates`, `a multinational cement manufacturer`, and `an IT
              strategy and deployment consultantcy firm`. Nowadays, I'm building
              user-friendly, inclusive, and accessible digital experiences at
              `one of Malaysia's largest swim schools`.
            </p>
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div>
            <Heading num="02." text="Where I've worked" />
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div>
            <Heading num="03." text="Skills & Interests" />
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div>
            <Heading num="04." text="Projects" />
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div>
            <Heading num="05." text="What's Next" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
