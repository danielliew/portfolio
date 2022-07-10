import React from "react";
import { contentSections } from "../../content/home";
import Heading from "../../components/Heading";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Home.module.css";
import astyles from "../../components/HoverDecoration/a.module.css";

import linkedInIcon from "../../components/svg/linkedIn.svg";
import githubIcon from "../../components/svg/github.svg";
import emailIcon from "../../components/svg/email.svg";
import ChineseName from "../../components/ChineseName";
import { openInNewTab } from "../../components/About/AboutLink";
import Navbar from "../../components/Navbar";
import Qoute from "../../components/Quote";

const hrefs = {
  linkedin: "https://www.linkedin.com/in/daniel-liew/",
  github: "https://github.com/danielliew",
  mail: "mailto::danieliewjh@gmail.com",
};

export const SideList: React.FC = () => {
  return (
    <ul className={`${styles["side-list"]}`}>
      <li>
        <a href={hrefs.linkedin} {...openInNewTab}>
          <img src={linkedInIcon} alt="linkedIn" />
        </a>
      </li>
      <li>
        <a href={hrefs.github} {...openInNewTab}>
          <img src={githubIcon} alt="github" />
        </a>
      </li>
      <li>
        <a href={hrefs.mail} {...openInNewTab}>
          <img src={emailIcon} alt="email" />
        </a>
      </li>
    </ul>
  );
};

const Home: React.FC = () => {
  const isLg = useResponsive();

  return (
    <div>
      <Navbar
        contentSections={[
          ...contentSections,
          {
            href: "/blog",
            navText: "Blog",
            solid: true,
          },
        ]}
      />
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
                <Qoute />
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
              <small className={styles.small}>
                Designed and built by Daniel Liew
              </small>
              <small className={styles.small}>Nov 2021</small>
              <small
                className={`${styles.small} ${astyles.a}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </small>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
