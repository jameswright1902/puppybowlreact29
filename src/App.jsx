import "./App.css";
import Players from "./players/AllPlayers";
import { Routes, Route } from "react-router-dom";
import Player from "./players/SinglePlayer";
import NavigationBar from "./NavBar";
import NewPlayerForm from "./players/NewPlayerForm";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/players/:playerid" element={<Player />} />
        <Route path="/signup" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
