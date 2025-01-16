import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");

  function startGame(name: string) {
    setPlayerName(name);
    setGameStarted(true);
  }

  function endGame() {
    setPlayerName("");
    setGameStarted(false);
  }

  return (
    <div className="app-container">
      <h3>My Reaction Game</h3>
      {gameStarted ? (
        <>
          <GameScreen playerName={playerName} />
          <button onClick={endGame}>End Game</button>
        </>
      ) : (
        <StartScreen onStartClicked={startGame} />
      )}
    </div>
  );
}

export default App;
