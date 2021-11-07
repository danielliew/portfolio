import React from "react";
import { openInNewTab } from "../About";
import styles from "./Contact.module.css";

const hrefs = {
  linkedin: "https://www.linkedin.com/in/daniel-liew/",
  mail: "mailto::danieliewjh@gmail.com",
};

const Contact: React.FC = () => {
  const aProps = {
    className: styles.a,
    ...openInNewTab,
  };
  return (
    <div>
      <h3>Get in touch!</h3>
      <p>
        Send me{" "}
        <a href={hrefs.mail} {...aProps}>
          an email
        </a>{" "}
        or drop{" "}
        <a href={hrefs.linkedin} {...aProps}>
          a LinkedIn connection request.
        </a>{" "}
        I'll do my best to get back to you as soon as I can!
      </p>
    </div>
  );
};

export default Contact;
