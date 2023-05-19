import styles from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div>
      <img
        className={styles.rotate}
        src="https://i.ibb.co/0JpkVxK/favicon.png"
        alt="loader"
      />
      <p className={styles.loaderText}>LOADING...</p>
    </div>
  );
}
