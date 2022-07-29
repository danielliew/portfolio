import React, { ReactElement, useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import styles from "./Cursor.module.css";
import { CursorContext } from "./CursorContext";

const Cursor = (): ReactElement => {
  const { clientX, clientY, isVisible } = useMousePosition();
  const { cursor } = useContext(CursorContext);

  if (window.matchMedia("(pointer: coarse)").matches) return <div />;

  return (
    <div className={styles.cursorCanvas}>
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          transition: "transform .2s ease-in-out",
          zIndex: 100,
        }}
      >
        {isVisible && <circle cx="25" cy="25" r="5" />}
      </svg>
    </div>
  );
};

export default Cursor;
