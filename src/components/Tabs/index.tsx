import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { TabProps } from "./types";

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const [current, setCurrent] = useState(0);
  const company = tabs[current];
  return (
    <div className={styles.tabsContainer}>
      <div>
        {tabs.map((item, i) => (
          <button
            key={i}
            className={`${styles.button} ${current === i && styles.bactive}`}
            onClick={() => setCurrent(i)}
          >
            {item.company}
            {current === i && <small>{company.location}</small>}
          </button>
        ))}
      </div>
      <div>
        {company.positions.map((item, i) => (
          <div key={i} className={styles["position-timeline"]}>
            <h4>{item.jobTitle}</h4>
            <h6>{item.duration}</h6>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
