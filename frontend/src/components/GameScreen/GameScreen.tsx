import React from "react";
import Indicator from "../Indicator";
import { GameState } from "../../types/game-state";
import "./GameScreen.css";
import { useGameLogic } from "../../hooks/useGameLogic";

interface GameScreenProps {
  playerName: string;
}

function GameScreen({ playerName }: GameScreenProps) {
  const { gameState, indicatorSide, feedback } = useGameLogic(playerName);
  return (
    <div className="game-container">
      {gameState === GameState.WAITING ? (
        <p>Waiting</p>
      ) : (
        <Indicator side={indicatorSide} />
      )}
      {feedback && (
        <div style={{ color: feedback?.type === "error" ? "red" : "green" }}>
          {feedback.msg}
        </div>
      )}
    </div>
  );
}

export default GameScreen;
