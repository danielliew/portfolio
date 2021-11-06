import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Project.module.css";
import { ProjectProps } from "./types";
import openIcon from "../svg/open.svg";
import openLightIcon from "../svg/open-light.svg";

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
          className={`${styles.a} ${isLg ? "" : styles["a-responsive"]}`}
          href={project.url || "/"}
          target="_blank"
          rel="noreferrer"
        >
          {project.title}
        </a>
        <div className={isLg ? styles.projectText : ""}>
          <p>{project.text}</p>
        </div>
        <div
          className={`${styles.tags} ${(left || !isLg) && styles["tags-left"]}`}
        >
          {project.tags.map((tag) => (
            <small>{tag}</small>
          ))}
        </div>

        {project.images.length > 1 && isLg ? (
          <div
            className={`${styles.buttonContainer} ${
              left && styles["buttonContainer-left"]
            }`}
          >
            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
          </div>
        ) : null}

        {isLg && project.url ? (
          <a
            className={`${styles.a} ${styles["a-responsive"]} ${styles.openIcon}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={openIcon} alt="open" />
          </a>
        ) : null}

        {!isLg && project.url ? (
          <a
            className={`${styles.a} ${styles["a-responsive"]} ${styles.openLightIcon}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={openLightIcon} alt="open" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
