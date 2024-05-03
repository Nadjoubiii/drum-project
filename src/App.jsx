// SoundButtonContainer.js

import React, { useState } from "react";
import MyButton from "./myButton";
import RecordButton from "./RecordButton";
import PlayButton from "./PlayButton";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

const buttonData = [
  { text: "Heater 1", soundFileName: "Heater-1.mp3" },
  { text: "Heater 2", soundFileName: "Heater-2.mp3" },
  { text: "Heater 3", soundFileName: "Heater-3.mp3" },
  { text: "Heater 4", soundFileName: "Heater-4_1.mp3" },
  { text: "Clap", soundFileName: "Heater-6.mp3" },
  { text: "Open-HH", soundFileName: "Dsc_Oh.mp3" },
  { text: "Kick-n'-Hat", soundFileName: "Kick_n_Hat.mp3" },
  { text: "Kick", soundFileName: "RP4_KICK_1.mp3" },
  { text: "Closed-HH", soundFileName: "Cev_H2.mp3" },
];

const SoundButtonContainer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedSequence, setRecordedSequence] = useState([]);

  const handleButtonClick = (soundFileName) => {
    console.log("Button clicked:", soundFileName); // Log button click
    if (isRecording) {
      console.log("Recording:", recordedSequence); // Log recorded sequence
      setRecordedSequence([...recordedSequence, soundFileName]);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    console.log("Recording");
    setRecordedSequence([]);
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log("Stopped Recording");
  };

  const playRecordedSequence = () => {
    recordedSequence.forEach((soundFileName, index) => {
      setTimeout(() => {
        console.log("Playing " + soundFileName);
        const audio1 = new Audio(
          `src/assets/Sounds/${
            buttonData.find((b) => b.text === soundFileName).soundFileName
          }`
        );
        audio1.play(); // Play the associated sound
      }, index * 250); // Adjust the delay between each sound (in milliseconds)
    });
  };

  return (
    <div className="sound-button-container">
      <div className="button-row">
        <RecordButton
          onClick={isRecording ? stopRecording : startRecording}
          isRecording={isRecording}
        />
        <PlayButton onClick={playRecordedSequence} disabled={isRecording} />
      </div>
      <div className="button-grid">
        {buttonData.map((button, index) => (
          <MyButton
            key={index}
            text={button.text}
            soundFileName={button.soundFileName}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SoundButtonContainer />
      <Footer />
    </div>
  );
};

export default App;

// export default SoundButtonContainer;
