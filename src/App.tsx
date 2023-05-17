import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldsChampions from "./pages/WorldsChampions";
import Champions from "./pages/ChampionsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WorldsChampions />} />
        <Route path="/season/:season" element={<Champions />} />
      </Routes>
    </Router>
  );
}

export default App;
