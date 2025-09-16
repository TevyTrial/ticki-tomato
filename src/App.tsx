import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import playImg from "./assets/play.png";
import resetImg from "./assets/reset.png";
import workBtnClicked from "./assets/work-clicked.png";
import workBtn from "./assets/work.png";
import breakBtnClicked from "./assets/break-clicked.png";
import breakBtn from "./assets/break.png";
import idleGif from "./assets/idle.gif";
import workGif from "./assets/work.gif";
import breakGif from "./assets/break.gif";
import meowSound from "./assets/meow.mp3";
import closeBtn from "./assets/close.png";
import minimizeImg from "./assets/minimize.png";

function App() {

  const [timeLeft, setTimeLeft] = React.useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = React.useState(false);
  const [breakButtonImage, setBreakButtonImage] = React.useState(breakBtn);
  const [workButtonImage, setWorkButtonImage] = React.useState(workBtn);
  const [isBreak, setIsBreak] = React.useState(false);
  const [encouragement, setEncouragement] = React.useState("");
  const [image, setImage] = React.useState(playImg);
  const [gifImage, setGifImage] = React.useState(idleGif);
  const audio = new Audio(meowSound);
  const [isFading, setIsFading] = useState(false);

  const cheerMessages = [
    "You can do it!",
    "Keep going!",
    "Almost there!",
    "Stay focused!",
    "Great job!",
    "Keep up the good work!",
    "You're doing great!",
    "Stay strong!",
    "Keep pushing!",
    "You're on fire!"
  ];

  const breakMessages = [
    "Take a deep breath.",
    "Relax and unwind.",
    "Enjoy your break!",
    "Time to recharge.",
    "Stretch your legs.",
    "Grab a snack.",
  ];
  //encouragement logic
 useEffect(() => {
  let messageInterval: NodeJS.Timeout;

  if (isRunning) {
    const messages = isBreak ? breakMessages : cheerMessages;
    let currentIndex = Math.floor(Math.random() * messages.length);
    setEncouragement(messages[currentIndex]);
    messageInterval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        let nextIndex = Math.floor(Math.random() * messages.length);
        setEncouragement(messages[nextIndex]);
        setIsFading(false);
      }, 800); // match your fadeOut animation duration
    }, 4000);
  } else {
    setEncouragement("");
  }

  return () => {
    if (messageInterval) {
      clearInterval(messageInterval);
    }
  };
}, [isRunning, isBreak]);

//countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    switchMode(false);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      audio.play().catch(err => {
        console.error("Failed to play sound:", err);
      });
      setIsRunning(false);
      setGifImage(idleGif);
      setImage(playImg);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60); // reset timer based on mode
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds/ 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

const switchMode = (breakMode: boolean) => {
  setIsBreak(breakMode);
  setIsRunning(false);
  setBreakButtonImage(breakMode ? breakBtnClicked : breakBtn);
  setWorkButtonImage(breakMode ? workBtn : workBtnClicked);

  setTimeLeft(breakMode ? 5 * 60 : 25 * 60);
}

  const handleClick = () => {
    if(!isRunning) {
      setIsRunning(true);
      setGifImage(isBreak ? breakGif : workGif);
      setImage(resetImg);
    } else {
      setIsRunning(false);
      setTimeLeft(25 * 60);
      setGifImage(idleGif);
      setImage(playImg);
    }
  }
  
const handleCloseClick = () => {
  if (window.electronAPI && window.electronAPI.closeApp) {
    window.electronAPI.closeApp();
  } else {
    console.warn("Electron API not available");
  }
};

const handleMinimizeClick = () => {
  window.electronAPI?.minimizeApp();
};

  const containerClass = `home-container ${isRunning ? "background-green":""}`;

  return (
    <div className={containerClass} style={{ position: 'relative' }}>
      <div>
        <button className="close-button" onClick={handleCloseClick}>
          <img src={closeBtn} alt="Close" />
        
        </button>
      </div>
      <div className="home-content">
        <div className="home-controls">
          <button className="image-button" onClick={() => switchMode(false)}>
            <img src={workButtonImage} alt="Work" />
          </button>
          <button className="image-button" onClick={() => switchMode(true)}>
            <img src={breakButtonImage} alt="Break" />
          </button>
        </div>

      <p className={`encouragement-text${isFading ? ' hidden' : ''}`}>
  {encouragement}
</p>
  

        <h1 className='home-timer'>{formatTime(timeLeft)}</h1>
        <img src={gifImage} alt="Timer State" className="gif-image" />
        <button className="home-button" onClick={handleClick}>
          <img src={image} alt="Button Icon" />
        </button>
        <button className="minimize-button" onClick={handleMinimizeClick}>
          <img src={minimizeImg} alt="Minimize" />
        </button>

      </div></div>

  );
}

export default App;
