import React from "react";
import astyles from "../HoverDecoration/a.module.css";

const hrefs = {
  ijm: "https://www.ijm.com/",
  ytl: "https://ytl.com/",
  ictrc: "https://www.ictrc.com.my/",
  supersharkz: "https://supersharkz.com/",
};

export const openInNewTab = {
  target: "_blank",
  rel: "noreferrer",
};

const About: React.FC = () => {
  const aProps = {
    className: astyles.a,
    ...openInNewTab,
  };
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
        for bringing purposeful ideas to fruition. I like to build, design, and
        engineer digital experiences.
        <br />
        <br />
        I've had the priveledge of interning at{" "}
        <a href={hrefs.ijm} {...aProps}>
          one of Malaysia's leading conglomerates
        </a>
        ,{" "}
        <a href={hrefs.ytl} {...aProps}>
          a multinational cement manufacturer
        </a>
        , and{" "}
        <a href={hrefs.ictrc} {...aProps}>
          an IT strategy and deployment consultantcy firm
        </a>
        . Nowadays, I'm building user-friendly, inclusive, and accessible
        digital experiences at{" "}
        <a href={hrefs.supersharkz} {...aProps}>
          one of Malaysia's largest swim schools
        </a>
        .
      </p>
    </div>
  );
};

export default About;
