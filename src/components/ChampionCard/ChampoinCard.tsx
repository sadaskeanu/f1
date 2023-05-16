import { ChampionData } from "../../types/ChampionCardData/ChampionData";
import styles from "./ChampionCard.module.css";

export default function ChampionCard(props: { champion: ChampionData }) {
  return (
    <div className={styles.card}>
      <div>
        season: {props.champion.MRData.StandingsTable.StandingsLists[0].season}
      </div>
      <div>
        points:
        {
          props.champion.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].points
        }
      </div>
      <div>
        {
          props.champion.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Driver.givenName
        }
      </div>
      <div>
        {
          props.champion.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Driver.familyName
        }
      </div>
      <div>
        {
          props.champion.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Constructors[0].nationality
        }
      </div>
      <div>
        {
          props.champion.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Constructors[0].name
        }
      </div>
    </div>
  );
}
