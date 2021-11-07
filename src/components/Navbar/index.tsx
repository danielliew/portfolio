import React, { useState } from "react";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import useResponsive from "../../hooks/useResponsive";
import { contentSections } from "../content";
import styles from "./Navbar.module.css";
import logo from "../svg/logo.svg";

const NavItem: React.FC<{ navText: string; onHamburger: () => void }> = ({
  navText,
  onHamburger,
}) => {
  const onClick = (nt: string) => {
    const section = document.querySelector(`#section-${nt}`);
    if (section) section.scrollIntoView();
    onHamburger();
  };
  const [{ opacity }, set] = useSpring(() => ({ opacity: 0 }));
  return (
    <li
      className={styles.navItem}
      onClick={() => onClick(navText)}
      onMouseEnter={() => set({ opacity: 1 })}
      onMouseLeave={() => set({ opacity: 0 })}
    >
      {navText}
      <animated.span style={{ opacity }} className={styles.dot} />
    </li>
  );
};

const NavItems: React.FC<{
  onHamburger: () => void;
}> = ({ onHamburger }) => {
  return (
    <>
      {contentSections.map(({ navText }, i) => (
        <NavItem navText={navText} key={i} onHamburger={onHamburger} />
      ))}
    </>
  );
};

const Navbar: React.FC = () => {
  const isLg = useResponsive();

  const [menu, setMenu] = useState(false);
  const onHamburger = () => {
    if (isLg) return;
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
    transform: menu ? "translateX(0%)" : "translateX(100%)",
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
        <img src={logo} alt="D" />
      </div>

      <div />

      {isLg ? (
        <div className={styles["nav-items-container"]}>
          <ul className={styles["nav-items"]}>
            <NavItems onHamburger={onHamburger} />
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
            <NavItems onHamburger={onHamburger} />
          </ul>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
