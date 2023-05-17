import { ListOfChampions } from "../../types/ListOfChampionsData/ListOfChampionsData";
import styles from "../ChampionCard/ChampionCard.module.css";

export default function ChampionsList(props: { list: ListOfChampions }) {
  return (
    <>
      <div>
        <div>season: {props.list.MRData.RaceTable.season}</div>
        <>
          <div>
            {props.list.MRData.RaceTable.Races.map((champion) => (
              <>
                <div className={styles.card}>
                  <div>race name: {champion.raceName}</div>
                  <div>
                    <>
                      {champion.Results.map((driver) => (
                        <>
                          <div>
                            {" "}
                            name: {driver.Driver.givenName}{" "}
                            {driver.Driver.familyName}{" "}
                          </div>
                          <div> nationality: {driver.Driver.nationality}</div>
                          <div> team: {driver.Constructor.name}</div>
                        </>
                      ))}
                    </>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      </div>
    </>
  );
}
