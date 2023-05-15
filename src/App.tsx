import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ChampionData } from "./types/ChampionCardData/ChampionData";
import ChampionCard from "./components/ChampionCard/ChampoinCard";

const YEARS = [
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

function App() {
  let [champions, setChampion] = useState<ChampionData[] | null>(null);

  const seasons = YEARS;

  const url = "https://ergast.com/api/f1/";

  const mainUrl = seasons.map(
    (season) => `${url}${season}/driverStandings/1.json`
  );

  // console.log(mainUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          mainUrl.map((url) => axios.get<ChampionData>(url))
        );

        const championData = responses.map((response) => response.data);
        setChampion(championData);
        console.log(championData);
        console.log(responses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!champions) return <div>Loading</div>;

  return (
    <>
      {champions.map((champion) => (
        <div className="App">
          <ChampionCard champion={champion} />
        </div>
      ))}
    </>
  );
}

export default App;
