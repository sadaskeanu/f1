import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import Card from "../Card/Card";
import styles from "./WorldChampionCard.module.css";

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
        nationality={champion.nationality}
        team={champion.team}
        points={champion.points}
      />
    </div>
  );
}
