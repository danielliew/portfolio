import React from "react";
import styles from "./Heading.module.css";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ num, text }) => {
  return (
    <div className={styles.container}>
      <h3>{num}</h3>
      <h2>{text}</h2>
    </div>
  );
};

export default Heading;
