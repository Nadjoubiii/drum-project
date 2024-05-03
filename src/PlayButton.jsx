import React from "react";
import "./PlayButton.css";

const PlayButton = ({ onClick, disabled }) => {
  return (
    <button className="play-button" onClick={onClick} disabled={disabled}>
      Play
    </button>
  );
};

export default PlayButton;
