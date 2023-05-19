import styles from "../Error/Error.module.css";
import errorSrc from "./assets/racing-car.png";

export default function Error() {
  return (
    <div>
      <img src={errorSrc} alt="error" />
      <p className={styles.errorText}>Oops something went wrong!</p>
    </div>
  );
}
