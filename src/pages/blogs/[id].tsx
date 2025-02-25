import { useRouter } from "next/router";
import blogData from "@/data/blogData";
import styles from "@/styles/BlogPage.module.css";

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query; // Haalt de dynamic route ID op
  const blog = id && blogData[id as string]; // Zoek de blog op aan de hand van de ID

  if (!blog) {
    return <p>Blog niet gevonden!</p>;
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogPageContainer}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogContent}>{blog.content}</p>
        <p className={styles.blogSubcontent}>{blog.subcontent}</p>
        <small className={styles.blogTimestamp}>{blog.timestamp}</small>
      </div>
    </div>
  );
};

export default BlogPage;
