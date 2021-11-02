import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { TabProps } from "./types";

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const [current, setCurrent] = useState(0);
  const company = tabs[current];
  return (
    <div>
      <div>
        {tabs.map((item, i) => (
          <button
            key={i}
            className={`${styles.button} ${current === i && styles.bactive}`}
            onClick={() => setCurrent(i)}
          >
            {item.company}
          </button>
        ))}
      </div>

      <h3>
        {company.jobTitle} @ {company.company}
      </h3>
      <p>{company.duration}</p>
      {company.content}
    </div>
  );
};

export default Tabs;
