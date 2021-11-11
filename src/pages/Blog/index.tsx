import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { blogNavbar, filters, blogPosts } from "../../content/blog";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Blog.module.css";
import astyles from "../../components/styles/a.module.css";
import { blogPostType } from "./types";

const pageTotal = 10;

const Blog: React.FC = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState<blogPostType>([]);

  const onPage = (p: number) => getBlogPosts(filter, p);
  const onFilter = (f: number) => getBlogPosts(f, page);

  const getBlogPosts = (f: number, p: number) => {
    if (f !== filter) p = 0;
    setLoading(true);

    const temp = blogPosts.filter((b) => f === 0 || filters[f].text === b.type);
    const t =
      Math.floor(temp.length / pageTotal) +
      (temp.length % pageTotal === 0 ? 0 : 1);
    const res = temp.slice(p * pageTotal, p * pageTotal + pageTotal);

    setFiltered(res);
    setTotalPages(t);
    if (p !== page) setPage(p);
    if (f !== filter) setFilter(f);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      getBlogPosts(0, 0);
    })();
  }, []);

  const isLg = useResponsive();

  return (
    <div>
      <Navbar contentSections={blogNavbar} />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1>Welcome to the blog</h1>
          <p>I might use this to post some cool articles</p>
        </section>

        <section>
          {filters.map((item, i) => (
            <button
              key={i}
              className={`${styles.filterBtns} ${
                filter === i && styles.filterBtnsActive
              }`}
              onClick={() => onFilter(i)}
            >
              {item.text}
            </button>
          ))}

          <div className={styles.blogList}>
            {!loading && !filtered.length ? (
              <small className={styles.noContent}>
                Content will be coming soon
              </small>
            ) : null}

            {!loading && filtered.length ? (
              <div>
                {filtered.map((post, i) => {
                  if (filter !== 0 && post.type !== filters[filter].text)
                    return null;
                  return (
                    <article
                      key={i}
                      className={`${styles.article} ${
                        !isLg ? styles["article-responsive"] : ""
                      }`}
                    >
                      <small className={styles.postType}>{post.type}</small>
                      <small className={styles.postDate}>{post.date}</small>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <p className={styles.postDesc}>{post.description}</p>
                      <picture className={styles.postPic}>
                        <img
                          className={`${styles.postImg} ${
                            !isLg ? styles["postImg-responsive"] : ""
                          }`}
                          src={post.image}
                          alt="preview"
                        />
                      </picture>
                      <a className={`${styles.postReadMore} ${astyles.a}`}>
                        Read more
                      </a>
                    </article>
                  );
                })}
              </div>
            ) : null}

            {loading ? (
              <small className={styles.noContent}>Loading...</small>
            ) : null}
          </div>
        </section>

        {filtered.length ? (
          <section>
            {page > 0 ? (
              <button
                onClick={() => onPage(page - 1)}
                className={`${astyles.a} ${styles.numbering}`}
              >
                Prev
              </button>
            ) : null}
            {new Array(totalPages).fill(0).map((x, i) => (
              <button
                onClick={() => onPage(i)}
                className={`${astyles.a} ${styles.numbering} ${
                  page === i ? styles.currPage : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
            {page < totalPages - 1 ? (
              <button
                onClick={() => onPage(page + 1)}
                className={`${astyles.a} ${styles.numbering}`}
              >
                Next
              </button>
            ) : null}
          </section>
        ) : null}

        <section>
          <small
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={astyles.a}
          >
            Back to top
          </small>
        </section>
      </div>
    </div>
  );
};

export default Blog;
