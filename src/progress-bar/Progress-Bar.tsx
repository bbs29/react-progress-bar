import React from "react";
import "./Progress-Bar.scss";

type IProps = {
  value: number;
};

const ProgressBarComponent = (props: IProps) => {
  const computeProgressValue = () => {
    if (props.value > 100) {
      return 100;
    }

    if (props.value < 0) {
      return 0;
    }

    return props.value;
  };
  return (
    <div className="progress-bar-container w-100 rounded">
      <div
        className="progress-bar rounded h-100"
        style={{
          width: `${computeProgressValue()}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBarComponent;
