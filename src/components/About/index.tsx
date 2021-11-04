import React from "react";
import styles from "./About.module.css";

const hrefs = {
  ijm: "https://www.ijm.com/",
  ytl: "https://ytl.com/",
  ictrc: "https://www.ictrc.com.my/",
  supersharkz: "https://supersharkz.com/",
};

const About: React.FC = () => {
  return (
    <div>
      <p>
        Hello! My name is Daniel and I'm a Junior at Rollins College in the
        picturesque city of Winter Park, FL.
        <br />
        <br />
        I love building websites and mobile applications that positively impact
        the world around me and improve the daily lives of others. I've always
        taken a keen interest towards problem solving and creative thinking.
        From building elegant and powerful frontend designs to complex and
        functional backend APIs, I want to use programming as a creative medium
        for bringing purposeful ideas to fruition.
        <br />
        <br />
        I've had the priveledge of interning at{" "}
        <a href={hrefs.ijm} className={styles.a}>
          one of Malaysia's leading conglomerates
        </a>
        ,{" "}
        <a href={hrefs.ytl} className={styles.a}>
          a multinational cement manufacturer
        </a>
        , and{" "}
        <a href={hrefs.ictrc} className={styles.a}>
          an IT strategy and deployment consultantcy firm
        </a>
        . Nowadays, I'm building user-friendly, inclusive, and accessible
        digital experiences at{" "}
        <a href={hrefs.supersharkz} className={styles.a}>
          one of Malaysia's largest swim schools
        </a>
        .
      </p>
    </div>
  );
};

export default About;