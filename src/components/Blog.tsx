import React from "react";
import styles from "@/styles/Blog.module.css";

interface BlogProps {
  title: string;
  content: string;
  timestamp: string;
}

const Blog: React.FC<BlogProps> = ({ title, content, timestamp }) => {
  return (
    <div className={styles.blogFrame}>
      <h3 className={styles.blogTitle}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <small className={styles.timestamp}>{timestamp}</small>
    </div>
  );
};

export default Blog;
