import React from "react";
import styles from "@/styles/Blog.module.css";

interface BlogProps {
  title: string;
  content: string;
  timestamp: string;
  subcontent: string;
}

const Blog: React.FC<BlogProps> = ({ title, content, timestamp, subcontent }) => {
  return (
    <div className={styles.blogFrame}>
      <h3 className={styles.blogTitle}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <p className={styles.subcontent}>{subcontent}</p>
      <small className={styles.timestamp}>{timestamp}</small>
    </div>
  );
};

export default Blog;
