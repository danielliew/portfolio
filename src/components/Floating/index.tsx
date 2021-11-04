import React, { useState } from "react";
import styles from "./Floating.module.css";
import { FloatingProps } from "./types";

const Floating: React.FC<FloatingProps> = ({ content }) => {
  const [active, setActive] = useState(-1);

  const onClick = (i: number) => {
    setActive(i);
  };

  return (
    <div className={styles.floatingContainer}>
      {content.map((item, i) => (
        <div key={i} className={styles.floatingItem} onClick={() => onClick(i)}>
          <div>{item.logo}</div>
          {active === i && <small>{item.text}</small>}
        </div>
      ))}
    </div>
  );
};

export default Floating;
