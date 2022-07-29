import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import AboutLink from "./AboutLink";
import astyles from "./About.module.css"
import rollinsIcon from "../svg/rollins.svg"

import rollins from "../images/rollins college.jpeg"

const companiesData = {
  ijm: {
    href: "https://www.ijm.com/",
    color: "#002688"
  },
  ytl: {
    href: "https://ytl.com/",
    color: "#0E9EDA"
  },
  ictrc: {
    href: "https://www.ictrc.com.my/",
    color: "#2869a8"
  },
  supersharkz: {
    href: "https://supersharkz.com/",
    color: "#b2ac5b"
  },
  zendesk: {
    href: "https://www.zendesk.com",
    color: "#174043"
  },
};

const About: React.FC = () => {

  const [show, set] = useState(false)
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div>
      <p>
        Hello! My name is Daniel and I'm a rising Senior at Rollins College in the
        picturesque city of Winter Park, FL.
        <br />
        <br />
      </p>
      <div
        className={astyles.rollinsImgWrapper}
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
      >
        <div className={astyles.rollinsImgWrapper1}>
          <div className={astyles.border} />
          <div className={astyles.border1} />
          {transitions(
            (styles, item) => item && <animated.img src={rollinsIcon} alt="rollins-logo" className={astyles.rollinsLogo} style={styles} />
          )}
          <img
            src={rollins}
            alt="rollins"
            className={astyles.rollinsImg}
          />
        </div>
      </div>
      <p>
        <br />
        <br />
        I love building websites and mobile applications that positively impact
        the world around me and improve the daily lives of others. I've always
        taken a keen interest towards problem solving and creative thinking.
        From building elegant and powerful frontend designs to complex and
        functional backend APIs, I want to use programming as a creative medium
        for bringing purposeful ideas to fruition. I enjoy building, designing, and
        engineering digital experiences.
        <br />
        <br />
        I've had the priveledge of interning at{" "}
        <AboutLink data={companiesData.ijm}>
          one of Malaysia's leading conglomerates
        </AboutLink>
        ,{" "}
        <AboutLink data={companiesData.ytl}>
          a multinational cement manufacturer
        </AboutLink>
        , and{" "}
        <AboutLink data={companiesData.ictrc}>
          an IT strategy and deployment consultantcy firm
        </AboutLink>
        . I've also built user-friendly, inclusive, and powerful
        digital experiences at{" "}
        <AboutLink data={companiesData.supersharkz}>
          one of Malaysia's largest swim schools
        </AboutLink>
        .
        This summer, I'm an intern at one of the <AboutLink data={companiesData.zendesk}>
          top customer service software providers in the world
        </AboutLink>.
        <br />
        <br />
        Outside anything computer science related, I enjoy playing jazz, swimming, chess, and discovering new places to eat.
      </p>
    </div>
  );
};

export default About;
