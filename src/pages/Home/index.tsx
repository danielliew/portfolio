import React from "react";
import { contentSections } from "../../components/content";
import Heading from "../../components/Heading";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Home.module.css";

import linkedInIcon from "../../components/svg/linkedIn.svg";
import githubIcon from "../../components/svg/github.svg";
import emailIcon from "../../components/svg/email.svg";
import ChineseName from "../../components/ChineseName";

export const SideList: React.FC = () => {
  return (
    <ul className={`${styles["side-list"]}`}>
      <li>
        <img src={linkedInIcon} alt="linkedIn" />
      </li>
      <li>
        <img src={githubIcon} alt="github" />
      </li>
      <li>
        <img src={emailIcon} alt="email" />
      </li>
    </ul>
  );
};

const Home: React.FC = () => {
  const isLg = useResponsive();

  return (
    <div className={styles["container"]}>
      {isLg && (
        <div className={styles["side"]}>
          <SideList />
        </div>
      )}
      <div className={styles["sections-container"]}>
        <section className={styles["top-section"]}>
          <div>
            <p className={styles["top-pretext"]}>Hi, my name is</p>
            <h1 className={styles["top-title"]}>Daniel Liew</h1>
            <div className={styles["top-posttext"]}>
              <ChineseName />
            </div>
          </div>
        </section>

        {contentSections.map((item, i) => (
          <section
            id={`section-${item.navText}`}
            key={i}
            className={styles["content-section"]}
          >
            <div>
              <Heading num={`0${i + 1}.`} text={item.text} />
              {item.content}
            </div>
          </section>
        ))}

        <section className={styles["content-section"]}>
          {!isLg && (
            <div className={styles["bottom-container"]}>
              <SideList />
            </div>
          )}
          <div className={styles["footer-container"]}>
            <small>Designed and built by Daniel Liew</small>
            <small>Nov 2021</small>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
