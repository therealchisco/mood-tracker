import React from "react";
import Card from "./Card";
import LineChart from "./LineChart";

function Dashboard() {
  const cardTitle = "Your mood history";
  const cardDesc =
    "Ready to see your emotional rollercoaster?\
     Hop on and let's take a ride!";

  return (
    <div id="Dashboard">
      <Card title={cardTitle} description={cardDesc}>
        <LineChart></LineChart>
      </Card>
    </div>
  );
}

export default Dashboard;
