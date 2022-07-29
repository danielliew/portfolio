import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./NotFound.module.css";
import pstyles from "../../components/Project/Project.module.css";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return <div>
    <Navbar
        contentSections={[]}
      />
    <div className={styles.container}>
      <section className={styles.header}>
        <p>404, the page you're looking for doesn't exist</p>

        <p>
          <span className={pstyles.button} onClick={() => navigate("/")}>Back to Portfolio</span>
        </p>

        <p>
          <span className={pstyles.button} onClick={() => navigate("/blog")}>Back to Blog</span>
        </p>
      </section>
    </div>
  </div>
};

export default NotFound;
