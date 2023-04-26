import React from "react";
import Card from "./Card";
import LineChart from "./LineChart";

function Dashboard() {
  return (
    <div id="Dashboard">
      <Card title="Your mood history" description="">
        <LineChart></LineChart>
      </Card>
    </div>
  );
}

export default Dashboard;
