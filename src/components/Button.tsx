import Link from "next/link";
import styles from "@/styles/Utils.module.css";

const Button = () => {
  return (
    <div className={styles.buttonM}>
      <Link href="/timeline">Create your own timeline</Link>
    </div>
  );
};

export default Button;
