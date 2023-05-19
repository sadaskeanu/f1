import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";
import Card from "../Card/Card";
import styles from "../ListOfChampions/RaceWinners.module.css";
import clsx from "clsx";

type Props = {
  champions: RaceChampionsData;
  isHighlighted: boolean;
  worldChampionId: string;
};

export default function ChampionsList({ champions, worldChampionId }: Props) {
  return (
    <div>
      <h2 className={styles.header}>{champions.season}: RACES WINNERS</h2>
      <ul>
        {champions.races.map((race) => (
          <li>
            <Card
              race={race.race}
              name={race.driverName}
              familyName={race.driverFamilyName}
              team={race.team}
              className={clsx(
                race.driverId === worldChampionId
                  ? styles.card
                  : styles.highlight
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
