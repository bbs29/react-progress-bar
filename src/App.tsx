import React, { useState } from "react";
import "./App.scss";
import ProgressBarComponent from "./progress-bar/Progress-Bar";

function App() {
  const [progressValue, setProgressValue] = useState<number>(0);
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col">
          <header>
            <h1>React Progress Bar</h1>
          </header>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <ProgressBarComponent value={progressValue} />
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <div>
            <label>Enter progress value (0-100):</label>
            <div className="input-group mb-3 w-25">
              <input
                type="number"
                min={0}
                max={100}
                className="form-control"
                id="progress-value"
                value={progressValue}
                onChange={(e) => {
                  setProgressValue(+e.currentTarget.value);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
