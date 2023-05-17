import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChampionData } from "../types/ChampionCardData/ChampionData";
import ChampionCard from "../components/ChampionCard/ChampoinCard";
import { getWorldChampions } from "../api/GetChampions";

export default function WorldsChampions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [worldChampions, setWorldChampions] = useState<ChampionData[] | null>(
    null
  );

  useEffect(() => {
    setIsLoading(true);

    getWorldChampions()
      .then((worldChampions) => {
        setWorldChampions(worldChampions);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  if (!worldChampions || isLoading) return <div>Loading...</div>;

  if (hasError) return <div>Oops something went wrong!</div>;

  return (
    <>
      {worldChampions.map((worldChampion) => (
        <Link
          className="App"
          to={`/season/${worldChampion.MRData.StandingsTable.StandingsLists[0].season}`}
        >
          <ChampionCard champion={worldChampion} />
        </Link>
      ))}
    </>
  );
}
