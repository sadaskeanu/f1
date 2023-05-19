import styles from "../Error/Error.module.css";

export default function Error() {
  return (
    <div>
      <img
        src="https://i.ibb.co/JKm7G17/racing-car-1f3ce-fe0f.png"
        alt="error"
      />
      <p className={styles.errorText}>Oops something went wrong!</p>
    </div>
  );
}
