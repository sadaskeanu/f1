import { ListOfChampions } from "../../types/ListOfChampionsData/ListOfChampionsData";

export default function ChampionsList(props: { list: ListOfChampions }) {
  return (
    <>
      <div>
        <div>season: {props.list.MRData.RaceTable.season}</div>
        <div>
          {props.list.MRData.RaceTable.Races.map((champion) => (
            <>
              <div>race name: {champion.raceName}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
