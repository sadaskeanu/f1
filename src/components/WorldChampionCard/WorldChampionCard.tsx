import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import styles from "./WorldChampionCard.module.css";

export default function WorldChampionCard({
  champion,
}: {
  champion: WorldChampionData;
}) {
  return (
    <div className={styles.card}>
      <div>season:{champion.season}</div>
      <div>points:{champion.points}</div>
      <div>{champion.name}</div>
      <div>{champion.familyName}</div>
      <div>{champion.nationality}</div>
      <div>{champion.team}</div>
    </div>
  );
}
