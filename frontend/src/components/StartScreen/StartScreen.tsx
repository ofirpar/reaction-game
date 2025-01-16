import React, { useState } from "react";
import "./StartScreen.css";

interface StartScreenProps {
  onStartClicked: (name: string) => void;
}

function StartScreen({ onStartClicked }: StartScreenProps) {
  const [name, setName] = useState("");
  return (
    <div className="input-container">
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        name="name"
        min="1"
        required={true}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button disabled={name.length < 1} onClick={() => onStartClicked(name)}>
        Start
      </button>
    </div>
  );
}

export default StartScreen;
