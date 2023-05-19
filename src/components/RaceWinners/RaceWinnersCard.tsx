import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";
import Card from "../Card/Card";
import styles from "../RaceWinners/RaceWinnersCard.module.css";

type Props = {
  champions: RaceChampionsData;
  isHighlighted: boolean;
  worldChampionId: string;
};

export default function RaceWinners({ champions, worldChampionId }: Props) {
  return (
    <div>
      <h2 className={styles.header}>{champions.season}: RACES WINNERS</h2>
      <ul>
        {champions.races.map((race) => (
          <li key={race.race}>
            <Card
              race={race.race}
              name={race.driverName}
              familyName={race.driverFamilyName}
              team={race.team}
              isHighlighted={race.driverId === worldChampionId}
              icon={race.driverId === worldChampionId ? "trophy" : "flag"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
