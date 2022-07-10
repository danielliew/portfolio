import React, { ReactElement, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import abstyles from "./About.module.css";
import astyles from "../HoverDecoration/a.module.css";

export const openInNewTab = {
    target: "_blank",
    rel: "noreferrer",
  };

const AboutLink = ({
    data,
    children
} : {
    data: {
        href: string,
        color: string
    },
    children: string
}) : ReactElement => {
    const [mouseEntered, setMouseEntered] = useState(false);

    const styles = useSpring({
        borderRadius: 3,
        padding: 1,
        backgroundColor: mouseEntered ? data.color : "white",
        color: mouseEntered ? "white" : data.color
    });

    return (
        <animated.a
            style={styles}
            className={`${astyles.a} ${abstyles.a}`}
            href={data.href} {...openInNewTab}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}>
                {children}
        </animated.a>
    )
}

export default AboutLink
