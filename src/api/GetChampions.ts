import { getYearsRange } from "../utils/helpers";
import { ChampionData } from "../types/ChampionCardData/ChampionData";
import { ListOfChampions } from "../types/ListOfChampionsData/ListOfChampionsData";
import axios from "axios";

const API_URL = "https://ergast.com/api/f1";

export const getWorldChampions = () => {
  const seasons = getYearsRange(2005);
  const urls = seasons.map(
    (season) => `${API_URL}/${season}/driverStandings/1.json`
  );

  return Promise.all(urls.map((url) => axios.get<ChampionData>(url))).then(
    (result) => result.map((item) => item.data)
  );
};

export const getListChampions = (season: string) => {
  const url = `${API_URL}/${season}/results/1.json`;

  return axios.get<ListOfChampions>(url).then((result) => result.data);
};
