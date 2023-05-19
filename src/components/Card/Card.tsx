import styles from "./Card.module.css";
import clsx from "clsx";
import trophySrc from "./assets/trophy.png";
import flagSrc from "./assets/flag.png";

type Props = {
  name: string;
  familyName: string;
  team: string;
  season?: string;
  points?: string;
  race?: string;
  icon: "trophy" | "flag";
  isHighlighted: boolean;
};

const mapIconToSrc = {
  trophy: trophySrc,
  flag: flagSrc,
};

export default function Card(props: Props) {
  return (
    <div
      className={clsx(styles.card, props.isHighlighted && styles.isHighlighted)}
    >
      <img
        className={styles.icon}
        alt="icon"
        src={mapIconToSrc[props.icon]}
        height="50"
      />

      <div className={styles.column}>
        <p>
          {props.name} {props.familyName}
        </p>
        <p className={styles.sideText}>{props.team}</p>
      </div>
      {props.points && props.season && (
        <>
          <div className={styles.column}>
            <p className={styles.none}>season: {props.season}</p>
            <p className={styles.sideText}>points: {props.points}</p>
          </div>
          <div className={clsx(styles.arrow, styles.right)}></div>
        </>
      )}
      {props.race && (
        <>
          <div className={styles.column}>
            <p className={clsx(styles.sideText, styles.none)}>race:</p>
            <p className={styles.none}> {props.race}</p>
          </div>
        </>
      )}
    </div>
  );
}
