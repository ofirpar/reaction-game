import { useState, useCallback, useRef, useEffect } from "react";
import { GameState } from "../types/game-state";
import { Feedback } from "../types/feedback";
import { getRandomInt, getRandomSide } from "../utils/get-random-int";
import { sendScore } from "../utils/send-score";

export const KEY_MAP = {
  left: "a",
  right: "l",
} as const;

export function useGameLogic(playerName: string) {
  const [gameState, setGameState] = useState<GameState>(GameState.WAITING);
  const [indicatorSide, setIndicatorSide] =
    useState<keyof typeof KEY_MAP>("left");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const stateTimeout = useRef<number | undefined>();

  const handleIndicatorState = useCallback(() => {
    stateTimeout.current = setTimeout(() => {
      setFeedback({ type: "error", msg: "Too Late" });
      setGameState(GameState.WAITING);
    }, 1000);
  }, []);

  const handleWaitingState = useCallback(() => {
    const timeToWait = getRandomInt(2000, 5000);
    stateTimeout.current = setTimeout(() => {
      setIndicatorSide(getRandomSide());
      setGameState(GameState.INDICATOR);
    }, timeToWait);
  }, []);

  const setFeedbackState = useCallback(
    (feedback: Feedback) => {
      clearTimeout(stateTimeout.current);
      setFeedback(feedback);
      if (gameState === GameState.WAITING) {
        handleWaitingState();
      } else {
        setGameState(GameState.WAITING);
      }
    },
    [gameState, handleWaitingState]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameState === GameState.WAITING) {
        setFeedbackState({ type: "error", msg: "Too Soon" });
      } else if (KEY_MAP[indicatorSide] === event.key) {
        setFeedbackState({ type: "success", msg: "Success" });
        sendScore(playerName, 1);
      } else {
        setFeedbackState({ type: "error", msg: "Wrong Key" });
      }
    },
    [gameState, indicatorSide, setFeedbackState, playerName]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      clearTimeout(stateTimeout.current);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameState === GameState.WAITING) {
      handleWaitingState();
    } else if (gameState === GameState.INDICATOR) {
      setFeedback(null);
      handleIndicatorState();
    }
  }, [gameState, handleIndicatorState, handleWaitingState]);

  return {
    gameState,
    indicatorSide,
    feedback,
  };
}
