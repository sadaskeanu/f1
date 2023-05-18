import styles from "./Card.module.css";

type Props = {
  name: string;
  familyName: string;
  nationality: string;
  team: string;
  season?: string;
  points?: string;
  race?: string;
};

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
      <p>{props.season}</p>
      <p>{props.race}</p>
      <p>{props.name}</p>
      <p>{props.familyName}</p>
      <p>{props.nationality}</p>
      <p>{props.team}</p>
      <p>{props.points}</p>
    </div>
  );
}
