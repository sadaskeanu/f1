import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import WorldChampionCard from "../../components/WorldChampionCard/WorldChampionCard";
import { getWorldChampions } from "../../api/GetChampions";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import styles from "../WorldsChampions/WorldsChampions.module.css";

export default function WorldsChampions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [worldChampions, setWorldChampions] = useState<
    WorldChampionData[] | null
  >(null);

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
      <h1 className={styles.header}>F1 WORLD CHAMPIONS</h1>
      {worldChampions.map((worldChampion) => (
        <Link to={`/season/${worldChampion.season}`}>
          <WorldChampionCard champion={worldChampion} />
        </Link>
      ))}
    </>
  );
}
