import React from "react";
import { contentSections } from "../../components/content";
import Heading from "../../components/Heading";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Home.module.css";

export const SideList: React.FC = () => {
  return (
    <ul className={`${styles["side-list"]}`}>
      <li>linkedin</li>
      <li>github</li>
      <li>email</li>
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
            <p className={styles["top-posttext"]}>
              Problem solving is a lifestyle.
            </p>
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
            <p>Designed and built by Daniel Liew</p>
            <p>Nov 2021</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
