import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";
import styles from "../WorldChampionCard/WorldChampionCard.module.css";

type Props = {
  champions: RaceChampionsData;
  isHighlighted: boolean;
  worldChampionId: string;
};

export default function ChampionsList({ champions, worldChampionId }: Props) {
  return (
    <div>
      <div>season: {champions.season}</div>
      <ul>
        {champions.races.map((race) => (
          <li className={styles.card}>
            <div>
              {race.driverId === worldChampionId
                ? "champion"
                : "not a champion"}
            </div>
            <div>{race.race}</div>
            <div>{race.driverName}</div>
            <div>{race.driverFamilyName}</div>
            <div>{race.nationality}</div>
            <div>{race.team}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
