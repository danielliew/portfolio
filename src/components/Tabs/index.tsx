import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Tabs.module.css";
import { TabProps } from "./types";

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const [current, setCurrent] = useState(0);
  const company = tabs[current];
  const isLg = useResponsive();
  return (
    <div className={`${styles.tabsContainer}${!isLg ? "-responsive" : ""}`}>
      <div>
        {tabs.map((item, i) => (
          <button
            key={i}
            className={`${styles.button} ${!isLg ? styles.respbutton : ""} ${
              current === i && styles.bactive
            }`}
            onClick={() => setCurrent(i)}
          >
            {!isLg ? item.company : <h3>{item.company}</h3>}
            <small className={styles.small}>{item.location}</small>
          </button>
        ))}
      </div>
      {/* timeline thing */}
      <div>
        {company.positions.map((item, i) => (
          <div key={i} className={styles["position-timeline"]}>
            <h4 className={styles.h4}>{item.jobTitle}</h4>
            <h6 className={styles.h6}>{item.duration}</h6>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
