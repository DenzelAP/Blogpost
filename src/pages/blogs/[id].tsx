import { useRouter } from "next/router";
import blogData from "@/data/blogData";
import styles from "@/styles/BlogPage.module.css";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query; // Haalt de dynamic route ID op
  const blog = id && blogData[id as string]; // Zoek de blog op aan de hand van de ID

  const images = [
    "/weekdays.png",
    "/dashboard.png",
    "/page_designer.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

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
        <div className={styles.slideshow}>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className={styles.blogImage}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
