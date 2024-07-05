import React from "react";

const Timer = ({
  hours,
  min,
  sec,
  pause,
  handlerPause,
  handlerResume,
  handleReset,
}) => {
  return (
    <div className="show-container">
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{min < 10 ? `0${min}` : min}</div>
        <span>:</span>
        <div>{sec < 10 ? `0${sec}` : sec}</div>
      </div>
      <div className="action-box">
        {!pause && (
          <button className="timer-btn" onClick={handlerPause}>
            Pause
          </button>
        )}
        {pause && (
          <button className="timer-btn" onClick={handlerResume}>
            Resume
          </button>
        )}
        <button className="timer-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
