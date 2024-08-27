import { useState } from "react";

export default function Player({
  defaultName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditPlayer() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }
  let buttonCaption = "Edit";
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="player-input"
        value={playerName}
        onChange={handleNameChange}
        required
      />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditPlayer}>{buttonCaption}</button>
    </li>
  );
}
