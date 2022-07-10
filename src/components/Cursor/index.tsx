import React, { ReactElement, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import useMousePosition from "../../hooks/useMousePosition";
import styles from "./Cursor.module.css"
import { CursorContext } from "./CursorContext";

const Cursor = () : ReactElement => {
    const { clientX, clientY, isVisible } = useMousePosition();
    const { cursor } = useContext(CursorContext);

    const springStyles = useSpring({
        loop: true,
        to: [
            {fill: `#002688${cursor.active ? "9A" : "FF"}`},
            {fill: `#174043${cursor.active ? "9A" : "FF"}`},
            {fill: `#0E9EDA${cursor.active ? "9A" : "FF"}`},
            {fill: `#ffee00${cursor.active ? "9A" : "FF"}`},
            {fill: `#2869a8${cursor.active ? "9A" : "FF"}`},
            {fill: `#ffab5c${cursor.active ? "9A" : "FF"}`},
            { fill: `#000000${cursor.active ? "9A" : "FF"}` },
        ],
        from: { fill: `#000000${cursor.active ? "9A" : "FF"}` },
        config: {
            ...config.default,
            duration: 2500
        }
      })

    if(window.matchMedia("(pointer: coarse)").matches)
        return <div />

    return <div className={styles.cursorCanvas}>
        <animated.svg
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
                ...springStyles
            }}
        >
            {isVisible && <circle
                cx="25"
                cy="25"
                r="8"
            />}
        </animated.svg>
    </div>
}

export default Cursor