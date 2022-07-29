import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { blogNavbar, blogPosts } from "../../content/blog";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Blog.module.css";
import astyles from "../../components/HoverDecoration/a.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { blogType } from "../Blog/types";
import { importImageDynamic } from "../Blog";
import Marked from "../../components/Marked";


export const importMdDynamic = async (dir: string) => {
  return (await fetch((await import(`../../content/blogPosts/${dir}/index.md`)).default)).text()
}

const MainBlog = ({
  blog_id,
}: {
  blog_id: string | undefined;
}): ReactElement => {
  const [blog, setBlog] = useState<blogType>({
    title: "",
    type: "",
    description: "",
    author: "",
    date: "",
    dir: "",
    url: "",
  });

  const isLg = useResponsive();

  const navigate = useNavigate();


  const [blogData, setBlogData] = useState({
    md: "",
    img: ""
  })

  useEffect(() => {
    let error = false;
    try {
      const findBlog = blogPosts.filter(b => b.url === blog_id)
      if (findBlog.length) {
        const [foundBlog] = findBlog
        setBlog(foundBlog);
        (async () => {
          const md = await importMdDynamic(foundBlog.dir)
          const img = await importImageDynamic(foundBlog.dir)
          setBlogData(() => ({
            md,
            img
          }))
        })()
      }
      else error = true;
  } catch {
      error = true;
    }
    if (error) navigate("/wtf");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog_id]);

  if (!blog.title)
    return (
      <div className={styles.container}>
        <section className={styles.header}>
          <p>Loading blog...</p>
        </section>
      </div>
    );

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <p>
          <span className={astyles.a} onClick={() => navigate("/blog")}>
            Back to Blog
          </span>
        </p>
      </section>

      <section>
        <small>{blog.type}</small>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <small>{blog.date}</small>
      </section>

      <section>
        <picture className={styles.postPic}>
          <img
            className={`${styles.postImg} ${
              !isLg ? styles["postImg-responsive"] : ""
            }`}
            src={blogData.img}
            alt="preview"
          />
        </picture>
      </section>

      <section>
        <article>
          <Marked md={blogData.md}/>
        </article>
      </section>

      <section>
        <p>
          <span className={astyles.a} onClick={() => navigate("/blog")}>
            Back to Blog
          </span>
        </p>
        <small
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={astyles.a}
        >
          Back to top
        </small>
      </section>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const { blog_id } = useParams();

  return (
    <div>
      <Navbar contentSections={blogNavbar} />
      <MainBlog blog_id={blog_id} />
    </div>
  );
};

export default BlogPage;
