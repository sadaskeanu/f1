// import React from "react";
// import { useState, useEffect } from "react";
// import "./App.css";
// import { ChampionData } from "./types/ChampionCardData/ChampionData";
// import { ListOfChampions } from "./types/ListOfChampionsData/ListOfChampionsData";
// import ChampionsList from "./components/ListOfChampions/ListOfChampions";
// import ChampionCard from "./components/ChampionCard/ChampoinCard";
// import { getWorldChampions } from "./api/GetChampions";
// import { getListChampions } from "./api/GetChampions";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldsChampions from "./pages/WorldsChampions";
import Champions from "./pages/ChampionsList";

function App() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [hasError, setHasError] = useState(false);
  //   let [worldChampions, setWorldChampions] = useState<ChampionData[] | null>(
  //     null
  //   );
  //   let [champions, setChampions] = useState<ListOfChampions[] | null>(null);

  //   useEffect(() => {
  //     setIsLoading(true);

  //     Promise.all([getWorldChampions(), getListChampions()])
  //       .then(([worldChampions, champions]) => {
  //         setWorldChampions(worldChampions);
  //         setChampions(champions);
  //       })
  //       .then(() => {
  //         setIsLoading(false);
  //       })
  //       .catch(() => {
  //         setHasError(true);
  //       });
  //   }, []);

  //   console.log(champions);

  //   if (!worldChampions || !champions || isLoading) return <div>Loading...</div>;

  //   if (hasError) return <div>Oops something went wrong!</div>;

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WorldsChampions />} />
          <Route path="/2005" element={<Champions />} />
        </Routes>
      </Router>
    </div>
    // <>
    //   {worldChampions.map((worldChampion) => (
    //     <div className="App">
    //       <ChampionCard champion={worldChampion} />
    //     </div>
    //   ))}
    //   {champions.map((champion) => (
    //     <div className="App">
    //       <ChampionsList list={champion} />
    //     </div>
    //   ))}
    // </>
  );
}

export default App;
