import React, { useEffect, useState } from "react";
import "./assets/app.css";
import Timer from "./Components/Timer";
import InputContainer from "./Components/InputContainer";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timeID, setTimeID] = useState(0);

  const handleStartTimer = () => {
    if (hours == "" && min == "" && sec == "") {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMin(0);
    setSec(0);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === "hours") {
      setHours(value);
    } else if (id === "min") {
      setMin(value);
    } else {
      setSec(value);
    }
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSec((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMin((m) => m - 1);
      setSec(59);
    } else {
      setHours((h) => h - 1);
      setMin(59);
      setSec(59);
    }

    if (hr == 0 && min == 0 && sec == 0) {
      setHours(0);
      setMin(0);
      setSec(0);
      clearInterval(timeID);
    }
  };

  useEffect(() => {
    let tid;

    if (isStart) {
      tid = setInterval(() => {
        runTimer(sec, min, hours, tid);
      }, 1000);

      setTimeID(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, min, sec]);

  const handlerPause = () => {
    setPause(true);
    clearInterval(timeID);
  };

  const handlerResume = () => {
    setPause(false);
    runTimer(sec, min, hours);
  };

  return (
    <div className="app">
      <h1>Countdown Timer</h1>
      {!isStart && (
        <InputContainer
          handleInput={handleInput}
          handleStartTimer={handleStartTimer}
        />
      )}

      {isStart && (
        <Timer
          handlerPause={handlerPause}
          handlerResume={handlerResume}
          handleReset={handleReset}
          pause={pause}
          hours={hours}
          min={min}
          sec={sec}
        />
      )}
    </div>
  );
};

export default App;
