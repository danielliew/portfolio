import React from "react";
import styles from "./Floating.module.css";
import { FloatingProps } from "./types";

const Floating: React.FC<FloatingProps> = ({ content }) => {
  return (
    <div className={styles.floatingContainer}>
      {content.map((item, i) => (
        <div key={i} className={styles.floatingItem}>
          {item.logo}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Floating;
