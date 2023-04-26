import React from "react";
import LineChart from "./LineChart";

function Card() {
  return (
    <div className="card text-center">
      <div className="card-header "></div>
      <div className="card-body">
        <h5 className="card-title">Your mood history</h5>
        <p className="card-text">
          Ready to see your emotional rollercoaster? Hop on and let's take a
          ride!
        </p>
        <LineChart></LineChart>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
}

export default Card;
