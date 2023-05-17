import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChampionData } from "../types/ChampionCardData/ChampionData";
import ChampionCard from "../components/ChampionCard/ChampoinCard";
import { getWorldChampions } from "../api/GetChampions";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

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

  if (!worldChampions || isLoading) return <Loader />;

  if (hasError) return <Error />;

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
