import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styles from "./Floating.module.css";
import { FloatingContent, FloatingProps } from "./types";

const FloatingItem: React.FC<FloatingContent> = ({ text, logo, showAll }) => {
  const [{ opacity }, set] = useSpring(() => ({ opacity: 0 }));

  return (
    <div
      className={styles.floatingItem}
      onMouseEnter={() => set({ opacity: 1 })}
      onMouseLeave={() => set({ opacity: 0 })}
    >
      <small> </small>
      <div>{logo}</div>
      <animated.small
        style={{
          opacity: showAll ? 1 : opacity,
        }}
      >
        {text}
      </animated.small>
    </div>
  );
};

const Floating: React.FC<FloatingProps> = ({ content }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div
      className={styles.floatingContainer}
      onClick={() => setShowAll((s) => !s)}
    >
      {content.map((item, i) => (
        <FloatingItem {...item} key={i} showAll={showAll} />
      ))}
    </div>
  );
};

export default Floating;
