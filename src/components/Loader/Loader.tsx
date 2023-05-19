import styles from "../Loader/Loader.module.css";
import flagSrc from "./assets/flag.png";

export default function Loader() {
  return (
    <div>
      <img className={styles.rotate} src={flagSrc} alt="loader" />
      <p className={styles.loaderText}>LOADING...</p>
    </div>
  );
}
