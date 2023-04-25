import { SetStateAction, createElement, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import HUD from "./components/HUD";
import NavBar from "./components/NavBar";
import LineChart from "./components/LineChart";
import Test from "./components/Dashboard/Test";
import axios from "axios";

export interface Mood {
  date_recorded: string;
  mood: number;
}

function foo(mood: Mood) {
  return createElement("li", { key: mood.date_recorded }, mood.mood);
}

const bar = (moods: Mood[]) => {
  return <ul>{moods.map((mood) => foo(mood))}</ul>;
};

function App() {
  const [count, setCount] = useState(0);
  const [mood, setMood] = useState(3);
  const [moods, setMoods] = useState<Mood[]>([]);

  useEffect(() => {
    axios.get<Mood[]>("http://localhost:3000/moods").then((res) => {
      setMoods(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <HUD moodKey={mood}></HUD>
      <Form mood={mood} handleChange={setMood}></Form>
      {/* <LineChart data={data} width={800} height={300}></LineChart> */}
      <Test moods={moods}></Test>
    </div>
  );
}

export default App;
