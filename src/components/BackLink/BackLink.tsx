import { Link } from "react-router-dom";
import styles from "../BackLink/BackLink.module.css";
import clsx from "clsx";

export default function BackLink() {
  return (
    <Link to={`/`}>
      <div className={styles.wrap}>
        <div className={clsx(styles.arrow, styles.left)}></div>
        <div className={styles.link}>Back to World's Champions</div>
      </div>
    </Link>
  );
}
