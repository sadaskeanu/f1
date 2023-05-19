import { useState, useEffect } from "react";
import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";
import ChampionsList from "../../components/RaceWinners/RaceWinnersCard";
import { getListChampions, getWorldChampion } from "../../api/GetChampions";
import { useNavigate, useParams } from "react-router-dom";
import BackLink from "../../components/BackLink/BackLink";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";

export default function Champions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [champions, setChampions] = useState<RaceChampionsData | null>(null);
  let [worldChampion, setWorldChampion] = useState<WorldChampionData | null>(
    null
  );
  // let { season } = useParams<{ season: string }>();
  let season = "2005";
  const navigate = useNavigate();

  useEffect(() => {
    if (!season) {
      navigate("/");
      return;
    }

    setIsLoading(true);
    console.log(champions);
    Promise.all([getListChampions(season), getWorldChampion(season)])
      .then(([champions, worldChampion]) => {
        setChampions(champions);
        setWorldChampion(worldChampion);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  if (!champions || !worldChampion || isLoading) return <Loader />;

  if (hasError) return <Error />;

  return (
    <div>
      <BackLink />
      <ChampionsList
        champions={champions}
        worldChampionId={worldChampion.id}
        isHighlighted={true}
      />
    </div>
  );
}
