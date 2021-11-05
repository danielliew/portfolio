import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Project.module.css";
import { ProjectProps } from "./types";

const Project: React.FC<ProjectProps> = ({ project, left }) => {
  const [pic, setPic] = useState(0);
  const onBack = () => setPic((p) => (p === 0 ? 0 : p - 1));
  const onNext = () =>
    setPic((p) => (p === project.images.length - 1 ? p : p + 1));

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

        {project.images.length > 1 ? (
          <div
            className={`${styles.buttonContainer} ${
              left && styles["buttonContainer-left"]
            }`}
          >
            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
          </div>
        ) : null}
      </div>

      <div
        className={
          isLg
            ? `${styles.content} ${left && styles["content-left"]}`
            : styles["content-responsive"]
        }
      >
        <a>
          <h3>{project.title}</h3>
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
      </div>
    </div>
  );
};

export default Project;
