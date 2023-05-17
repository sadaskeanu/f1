import { useState, useEffect } from "react";
import { ListOfChampions } from "../types/ListOfChampionsData/ListOfChampionsData";
import ChampionsList from "../components/ListOfChampions/ListOfChampions";
import { getListChampions } from "../api/GetChampions";
import { useNavigate, useParams } from "react-router-dom";

export default function Champions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [champions, setChampions] = useState<ListOfChampions | null>(null);
  let { season } = useParams<{ season: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!season) {
      navigate("/");
      return;
    }

    setIsLoading(true);

    getListChampions(season)
      .then((champions) => {
        setChampions(champions);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  if (!champions || isLoading) return <div>Loading...</div>;

  if (hasError) return <div>Oops something went wrong!</div>;

  return <ChampionsList list={champions} />;
}
