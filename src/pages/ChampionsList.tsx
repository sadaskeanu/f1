import { useState, useEffect } from "react";
import { ListOfChampions } from "../types/ListOfChampionsData/ListOfChampionsData";
import ChampionsList from "../components/ListOfChampions/ListOfChampions";
import { getListChampions } from "../api/GetChampions";

export default function Champions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [champions, setChampions] = useState<ListOfChampions[] | null>(null);

  useEffect(() => {
    setIsLoading(true);

    getListChampions()
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

  return (
    <>
      {champions.map((champion) => (
        <div className="App">
          <ChampionsList list={champion} />
        </div>
      ))}
    </>
  );
}
