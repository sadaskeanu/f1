import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";
import styles from "../WorldChampionCard/WorldChampionCard.module.css";
import Card from "../Card/Card";

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
          <li>
            <div>
              {race.driverId === worldChampionId
                ? "champion"
                : "not a champion"}
            </div>
            <Card
              race={race.race}
              name={race.driverName}
              familyName={race.driverFamilyName}
              nationality={race.nationality}
              team={race.team}
            />
            {/* <div>{race.race}</div>
            <div>{race.driverName}</div>
            <div>{race.driverFamilyName}</div>
            <div>{race.nationality}</div>
            <div>{race.team}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
