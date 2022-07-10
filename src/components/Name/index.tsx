import React, { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import useCursorHandlers from "../../hooks/useCursorHandlers";
import styles from "../../pages/Home/Home.module.css";

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 10,
  (x - rect.left - rect.width / 2) / 10,
  1.5,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const initialXys = [0, 0, 1];

const Name = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [xys, set] = useState(initialXys);
  const props = useSpring({ xys });

  const ch = useCursorHandlers()

  return (
    <animated.div
      ref={ref}
      style={{ transform: props.xys.to(trans) }}
      onMouseEnter={ch.onMouseEnter}
      onMouseLeave={() => {
        set(initialXys)
        ch.onMouseLeave()
      }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect)
          set(calc(e.clientX, e.clientY, rect));
      }}
      className={xys === initialXys ? "" : styles.box}
    >
      <h1 className={styles["top-title"]}>
        Daniel Liew
      </h1>
    </animated.div>
  );
};

export default Name;
