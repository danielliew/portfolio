import React, { useState } from "react";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import useResponsive from "../../hooks/useResponsive";
import { SideList } from "../../pages/Home";
import { contentSections } from "../content";
import styles from "./Navbar.module.css";

const NavItems: React.FC = () => {
  return (
    <>
      {contentSections.map(({ navText }, i) => (
        <li key={i}>{navText}</li>
      ))}
    </>
  );
};

const Navbar: React.FC = () => {
  const isLg = useResponsive();

  const [menu, setMenu] = useState(false);
  const onHamburger = () => {
    setMenu((m) => {
      if (!m) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return !m;
    });
  };

  const menuSpringRef = useSpringRef();
  const propsMenu = useSpring({
    transform: menu ? "translateX(0vw)" : "translateX(100vw)",
    ref: menuSpringRef,
  });

  const hSpringRef = useSpringRef();
  const propsHamburger1 = useSpring({
    transform: menu
      ? "rotate(45deg) translate(5px, 5px)"
      : "rotate(0deg) translate(0px, 0px)",
    backgroundColor: menu ? "white" : "black",
    config: {
      duration: 100,
    },
    ref: hSpringRef,
  });

  const propsHamburger2 = useSpring({
    transform: menu ? "rotate(-45deg)" : "rotate(0deg)",
    backgroundColor: menu ? "white" : "black",
    config: {
      duration: 100,
    },
    ref: hSpringRef,
  });

  useChain([menuSpringRef, hSpringRef]);

  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <h1>D</h1>
      </div>

      <div />

      {isLg ? (
        <div className={styles["nav-items-container"]}>
          <ul className={styles["nav-items"]}>
            <NavItems />
          </ul>
        </div>
      ) : (
        <div className={styles.hamburger}>
          <button
            className={styles["hamburger-container"]}
            onClick={onHamburger}
          >
            <animated.span
              style={propsHamburger1}
              className={styles["hamburger-line"]}
            />
            <span className={styles["hamburger-line hamburger-separate"]} />
            <animated.span
              style={propsHamburger2}
              className={styles["hamburger-line"]}
            />
          </button>
        </div>
      )}

      <animated.div style={propsMenu} className={styles.menu}>
        <div className={styles["centered"]}>
          <ul className={styles["nav-items-menu"]}>
            <NavItems />
          </ul>
        </div>
        <div className={styles["centered"]}>
          <SideList />
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
