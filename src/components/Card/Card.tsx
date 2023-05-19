import styles from "./Card.module.css";
import clsx from "clsx";

type Props = {
  name: string;
  familyName: string;
  team: string;
  season?: string;
  points?: string;
  race?: string;
  className?: string;
  image?: string;
};

export default function Card(props: Props) {
  return (
    <div className={props.className}>
      <img alt="trophy icon" src={props.image} height="50" />

      <div className={styles.column}>
        <p>
          {props.name} {props.familyName}
        </p>
        <p className={styles.sideText}>{props.team}</p>
      </div>
      {props.points && props.season && (
        <>
          <div className={styles.column}>
            <p>season: {props.season}</p>
            <p className={styles.sideText}>points: {props.points}</p>
          </div>
          <div className={clsx(styles.arrow, styles.right)}></div>
        </>
      )}
      {props.race && (
        <>
          <div className={styles.column}>
            <p className={styles.sideText}>race:</p>
            <p> {props.race}</p>
          </div>
        </>
      )}
    </div>
  );
}
