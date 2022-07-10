import React, { ReactNode, useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Project.module.css";
import astyles from "../HoverDecoration/a.module.css";
import { ProjectProps } from "./types";
import openIcon from "../svg/open.svg";
import openLightIcon from "../svg/open-light.svg";
import { openInNewTab } from "../About";

const Project: React.FC<ProjectProps> = ({ project, left }) => {
  const [pic, setPic] = useState(0);
  const onBack = () =>
    setPic((p) => (p === 0 ? project.images.length - 1 : p - 1));
  const onNext = () =>
    setPic((p) => (p === project.images.length - 1 ? 0 : p + 1));

  const isLg = useResponsive();

  return (
    <div className={styles.container}>
      <div
        className={
          isLg
            ? `${styles.imgContainer} ${left && styles["imgContainer-left"]}`
            : styles["imgContainer-responsive"]
        }
      >
        <div className={styles.imgWrapper}>
          <div className={styles.imgWrapper1}>
            <img
              src={project.images[pic]}
              alt="project"
              className={
                isLg
                  ? `${styles.img} ${project.mobile ? styles.mobile : ""}`
                  : styles["img-responsive"]
              }
            />
          </div>
        </div>
      </div>

      <div
        className={
          isLg
            ? `${styles.content} ${left && styles["content-left"]}`
            : styles["content-responsive"]
        }
      >
        <a
          className={`${styles.a} ${astyles.a} ${
            isLg ? "" : styles["a-responsive"]
          }`}
          href={project.url || "/"}
          {...openInNewTab}
        >
          <span className={styles.title}>{project.title}</span>
        </a>
        <div className={isLg ? styles.projectText : ""}>
          {typeof project.text === "string" ? <p>{project.text}</p> : (project.text as ReactNode)}
          {project.images.length > 1 && isLg ? (
            <div
              className={`${styles.buttonContainer} ${
                left && styles["buttonContainer-left"]
              }`}
            >
              <button className={styles.button} onClick={onBack}>
                Back
              </button>
              <button className={styles.button} onClick={onNext}>
                Next
              </button>
            </div>
          ) : null}
        </div>
        <div
          className={`${styles.tags} ${(left || !isLg) && styles["tags-left"]}`}
        >
          <small>{project.tags.join(" ・ ")}</small>
        </div>

        {project.url ? (
          <div>
            <a
              className={`${styles.a} ${astyles.a} ${styles["a-responsive"]} ${
                isLg ? styles.openIcon : styles.openLightIcon
              }`}
              href={project.url}
              {...openInNewTab}
            >
              <img src={isLg ? openIcon : openLightIcon} alt="open" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
