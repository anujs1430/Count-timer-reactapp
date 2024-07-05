import React from "react";

const InputContainer = ({ handleInput, handleStartTimer }) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="number"
          placeholder="HH"
          id="hours"
          onChange={handleInput}
        />
        <input type="number" placeholder="MM" id="min" onChange={handleInput} />
        <input type="number" placeholder="SS" id="sec" onChange={handleInput} />
      </div>
      <button className="timer-btn" onClick={handleStartTimer}>
        Start
      </button>
    </div>
  );
};

export default InputContainer;
