import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getListChampions, getWorldChampion } from "../../api";
import BackLink from "../../components/BackLink/BackLink";
import Heading from "../../components/Heading/Heading";
import Loader from "../../components/Loader/Loader";
import List from "../../components/List/List";
import Error from "../../components/Error/Error";
import Card from "../../components/Card/Card";
import { WorldChampionData } from "../../types/ChampionCardData/WorldChampionData";
import { RaceChampionsData } from "../../types/RaceChampionsData/RaceChampionsData";

export default function Champions() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  let [champions, setChampions] = useState<RaceChampionsData | null>(null);
  let [worldChampion, setWorldChampion] = useState<WorldChampionData | null>(
    null
  );
  let { season } = useParams<{ season: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!season) {
      navigate("/");
      return;
    }

    setIsLoading(true);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError) return <Error />;

  if (!champions || !worldChampion || isLoading) return <Loader />;

  return (
    <>
      <BackLink to="/">Back to World's Champions</BackLink>
      <Heading level={1}>{champions.season}: RACES WINNERS</Heading>
      <List>
        {champions.races.map((race) => {
          const isHighlighted = race.driverId === worldChampion?.id;

          return (
            <li key={race.race}>
              <Card
                race={race.race}
                name={race.driverName}
                familyName={race.driverFamilyName}
                team={race.team}
                isHighlighted={isHighlighted}
                icon={isHighlighted ? "trophy" : "flag"}
              />
            </li>
          );
        })}
      </List>
    </>
  );
}
