import styles from "@/styles/Blog.module.css";
import Blog from "@/components/Blog";

const Blogs = () => {
  const messageWeek1: string =
    "In de eerste week lag de focus vooral op het leren kennen van de systemen, onze collega's en SQL + PL/SQL.";
  const messageWeek2: string = "";
  return (
    <div>
      <div className={styles.mainHeader}>
        <h3>Elke week zal er een nieuw blog component toegevoegd worden aan de lijst.</h3>
      </div>
      <main className={styles.main}>
        <div className={styles.listContainer}>
          <div>
            <h3 className={styles.title}>Stageplek</h3>
            <ul className={styles.stageLijst}>
              <li className={styles.stageLijstItem}>Contribute</li>
            </ul>

            <h3 className={styles.title}>Stagementor</h3>

            <ul className={styles.stageLijst}>
              <li className={styles.stageLijstItem}>Filip Huysmans</li>
            </ul>

            <h3 className={styles.title}>Tech stack</h3>
            <ul className={styles.stageLijst}>
              <li className={styles.stageLijstItem}>SQL</li>
              <li className={styles.stageLijstItem}>PL/SQL</li>
              <li className={styles.stageLijstItem}>Oracle Apex</li>
            </ul>
          </div>
        </div>

        <div className={styles.blogContainer}>
          <Blog
            title="Week 1"
            content={messageWeek1}
            timestamp="03/02/25 - 07/02/25"
          />
          <Blog
            title="Week 2"
            content={messageWeek2}
            timestamp="10/02/25 - 15/02/25"
          />
        </div>
      </main>
    </div>
  );
};

export default Blogs;
