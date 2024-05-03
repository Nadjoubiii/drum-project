// MyButton.js

import React from "react";
import "./myButton.css";

const MyButton = ({ onClick, text, soundFileName }) => {
  const handleClick = () => {
    onClick(text); // Pass the text of the button to the onClick handler
    const audio = new Audio(`src/assets/Sounds/${soundFileName}`);
    audio.play(); // Play the associated sound
    console.log("Sound played!");
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default MyButton;
