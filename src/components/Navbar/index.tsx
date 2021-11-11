import React, { useState } from "react";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import { useNavigate } from "react-router";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Navbar.module.css";
import dstyles from "../HoverDecoration/dot.module.css";
import logo from "../svg/logo.svg";
import { ContentSections, NavItemProps, NavItemsProps } from "./types";

const HoverArrow = () => (
  <svg
    className={styles.hoverArrow}
    width="10"
    height="10"
    viewBox="0 0 10 10"
    aria-hidden="true"
  >
    <g fillRule="evenodd">
      <path className={styles.hoverArrowLinePath} d="M0 5h7"></path>
      <path className={styles.hoverArrowTipPath} d="M1 1l4 4-4 4"></path>
    </g>
  </svg>
);

const NavItem: React.FC<NavItemProps> = ({
  href,
  navText,
  solid,
  onHamburger,
}) => {
  const navigate = useNavigate();
  const isLg = useResponsive();

  const onClick = () => {
    onHamburger();
    if (href) navigate(href);
    const section = document.querySelector(`#section-${navText}`);
    if (section) section.scrollIntoView();
  };

  const [{ opacity }, set] = useSpring(() => ({ opacity: 0 }));

  return (
    <li
      className={`${styles.navItem} ${solid && styles.navItemSolid} ${
        !isLg && solid && styles.navItemSolidLight
      }`}
      onClick={() => onClick()}
      onMouseEnter={() => set({ opacity: 1 })}
      onMouseLeave={() => set({ opacity: 0 })}
    >
      <span
        className={`${styles.navItemContent} ${
          !isLg && !solid && styles.navItemContentMenu
        }`}
      >
        {navText}
        {solid && <HoverArrow />}
      </span>
      {!solid && <animated.span style={{ opacity }} className={dstyles.dot} />}
    </li>
  );
};

const NavItems: React.FC<NavItemsProps> = ({
  contentSections,
  onHamburger,
}) => {
  return (
    <>
      {contentSections.map(({ navText, href, solid }, i) => (
        <NavItem
          href={href}
          navText={navText}
          solid={solid}
          key={i}
          onHamburger={onHamburger}
        />
      ))}
    </>
  );
};

const Navbar: React.FC<{
  contentSections: ContentSections;
}> = ({ contentSections }) => {
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
  const navItemsOnHamburger = () => {
    setMenu(false);
    document.body.style.overflow = "auto";
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
            <NavItems
              contentSections={contentSections}
              onHamburger={navItemsOnHamburger}
            />
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
            <NavItems
              contentSections={contentSections}
              onHamburger={navItemsOnHamburger}
            />
          </ul>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
