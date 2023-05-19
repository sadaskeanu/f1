import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import Card from "../Card/Card";
import styles from "../ListOfChampions/RaceWinners.module.css";

export default function WorldChampionCard({
  champion,
}: {
  champion: WorldChampionData;
}) {
  return (
    <div>
      <Card
        season={champion.season}
        name={champion.name}
        familyName={champion.familyName}
        team={champion.team}
        points={champion.points}
        className={styles.card}
        image={"https://i.ibb.co/0JpkVxK/favicon.png"}
      />
    </div>
  );
}
