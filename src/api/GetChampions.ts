import { getYearsRange } from "../utils/helpers";
import { WorldChampionDataApiResponse } from "../types/ChampionCardData/WorldChampionData";
import { RaceChampionsDataApiResponse } from "../types/RaceChampionsData/RaceChampionsData";
import axios from "axios";
import { mapWorldChampionApiResponse } from "../utils/mappers";
import { mapRaceChampionsApiResponse } from "../utils/mappers";

const API_URL = "https://ergast.com/api/f1";

export const getWorldChampions = () => {
  const seasons = getYearsRange(2005);
  const urls = seasons.map(
    (season) => `${API_URL}/${season}/driverStandings/1.json`
  );

  return Promise.all(
    urls.map((url) => axios.get<WorldChampionDataApiResponse>(url))
  ).then((result) =>
    result.map((item) => mapWorldChampionApiResponse(item.data))
  );
};

export const getListChampions = (season: string) => {
  const url = `${API_URL}/${season}/results/1.json`;

  return axios
    .get<RaceChampionsDataApiResponse>(url)
    .then((result) => mapRaceChampionsApiResponse(result.data));
};

export const getWorldChampion = (season: string) => {
  const url = `${API_URL}/${season}/driverStandings/1.json`;
  return axios
    .get<WorldChampionDataApiResponse>(url)
    .then((champion) => mapWorldChampionApiResponse(champion.data));
};
