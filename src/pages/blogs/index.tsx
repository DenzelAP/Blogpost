import Link from "next/link";
import styles from "@/styles/Blog.module.css";

const blogList = [
  { id: "week-1", title: "Week 1", date: "03/02/25 - 07/02/25" },
  { id: "week-2", title: "Week 2", date: "10/02/25 - 15/02/25" },
  { id: "week-3", title: "Week 3", date: "17/02/25 - 22/02/25" },
];

const Blogs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.companyInfo}>
        <h2 className={styles.companyInfoTitle}>Over mijn stageplek</h2>
        <ul className={styles.companyInfoList}>
          <h4 className={styles.companyInfoSubTitle}>Stageplek: </h4>
          <li className={styles.companyInfoListItem}>
            <a
              href="http://www.contribute.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </li>
          <h4 className={styles.companyInfoSubTitle}>Stagementor: </h4>
          <li className={styles.companyInfoListItem}>
            <a href="https://be.linkedin.com/in/filiphuysmans?original_referer=https%3A%2F%2Fwww.google.com%2F">
              Filip Huysmans
            </a>
          </li>
          <h4 className={styles.companyInfoSubTitle}>Technologien: </h4>
          <li className={styles.companyInfoListItem}>Oracle Apex</li>
          <li className={styles.companyInfoListItem}>SQL</li>
          <li className={styles.companyInfoListItem}>PL/SQL</li>
          <li className={styles.companyInfoListItem}>Javascript</li>
        </ul>
        <h3>Meer over het bedrijf</h3>
        <p>
          Contribute is een Belgisch IT-bedrijf dat gespecialiseerd is in het
          ontwikkelen van digitale oplossingen op maat om bedrijfsprocessen te
          optimaliseren. Hun diensten omvatten het bouwen van web- en mobiele
          applicaties, rapportagetools en chatbots, voornamelijk gebaseerd op
          Oracle-technologieën. Daarnaast biedt Contribute managed services,
          applicatie-integratie en een 'software factory' met een team van
          Oracle APEX-specialisten die kwaliteitsvolle applicaties ontwikkelen.
        </p>
        <Link href="/extra">More...</Link>
      </div>
      <div className={styles.blogList}>
        <h1 className={styles.blogHeader}>Beschikbare Blogs</h1>
        <ul>
          {blogList.map((blog) => (
            <li key={blog.id} className={styles.blogItem}>
              <Link href={`/blogs/${blog.id}`}>
                <p className={styles.blogLink}>
                  {blog.title} -{" "}
                  <span className={styles.blogDate}>{blog.date}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
