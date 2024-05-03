import React from "react";
import "./myButton.css";
import "./RecordButton.css";

const RecordButton = ({ onClick, isRecording }) => {
  return (
    <button className="record-button" onClick={onClick}>
      {isRecording ? "Stop Recording" : "Start Recording"}
    </button>
  );
};

export default RecordButton;
