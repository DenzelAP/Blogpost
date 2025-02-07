import styles from "@/styles/Blog.module.css";
import Blog from "@/components/Blog";

const Blogs = () => {
  const messageWeek1: string = "In de eerste week lag de focus vooral op het leren kennen van de systemen, onze collega's en SQL + PL/SQL.";
  const messageWeek2: string = "Tijdens week 2 hebben we veel liggen oefenen op Oracle Apex.";
  return (
    <main className={styles.main}>
      <div className={styles.blogContainer}>
        <Blog title="Week 1" content={messageWeek1} timestamp="03/02/25 - 07/02/25" />
        <Blog title="Week 2" content={messageWeek2} timestamp="10/02/25 - 15/02/25" />
      </div>
    </main>
  );
};

export default Blogs;
