import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import Card from "../Card/Card";
import styles from "../RaceWinners/RaceWinnersCard.module.css";

export default function WorldChampionCard({
  champion,
}: {
  champion: WorldChampionData;
}) {
  return (
    <Card
      season={champion.season}
      name={champion.name}
      familyName={champion.familyName}
      team={champion.team}
      points={champion.points}
      isHighlighted={false}
      icon="trophy"
    />
  );
}
