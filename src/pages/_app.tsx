import styles from "@/styles/Layout.module.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <nav className={styles.topNav}>
      <ul>
        <li>
          <Link
            href="/blogs"
            className={router.pathname.includes("/blogs") ? styles.active : ""}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={router.pathname == "/" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.headerImg}>
        <img src="/Blox.png" alt="blox logo" />
      </div>
      <div>
        <NavigationBar />
        <Component {...pageProps} />
      </div>
      <footer className={styles.layoutFooter}>
        <div className={styles.leftBarContainer}>
          <div className={styles.leftBar}></div>
        </div>

        <p>&#169; 2025 Blox NV. - Alle rechten voorbehouden</p>

        <div className={styles.rightBarContainer}>
          <div className={styles.rightBar}></div>
        </div>
      </footer>
    </>
  );
}
