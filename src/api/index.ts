import axios from "axios";

import { WorldChampionDataApiResponse } from "../types/ChampionCardData/WorldChampionData";
import { RaceChampionsDataApiResponse } from "../types/RaceChampionsData/RaceChampionsData";
import {
  mapRaceChampionsApiResponse,
  mapWorldChampionApiResponse,
} from "../utils/mappers";
import { getYearsRange } from "../utils/helpers";

const API_URL = "https://ergast.com/api/f1";

export const getWorldChampion = (season: string) => {
  const url = `${API_URL}/${season}/driverStandings/1.json`;
  return axios
    .get<WorldChampionDataApiResponse>(url)
    .then((champion) => mapWorldChampionApiResponse(champion.data));
};

export const getWorldChampions = () => {
  const seasons = getYearsRange(2005);
  const requests = seasons.map((season) => getWorldChampion(String(season)));

  return Promise.all(requests);
};

export const getListChampions = (season: string) => {
  const url = `${API_URL}/${season}/results/1.json`;

  return axios
    .get<RaceChampionsDataApiResponse>(url)
    .then((result) => mapRaceChampionsApiResponse(result.data));
};
