import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldsChampions from "../../pages/WorldsChampions/WorldsChampions";
import Champions from "../../pages/RaceChampions/ChampionsList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route index element={<WorldsChampions />} />
          <Route path="/season/:season" element={<Champions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
