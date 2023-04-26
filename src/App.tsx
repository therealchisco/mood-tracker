import { SetStateAction, createElement, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/UserInput/Form";
import HUD from "./components/UserInput/HUD";
import NavBar from "./components/NavBar";
import axios from "axios";
import UserInput from "./components/UserInput/UserInput";
import LineChart from "./components/Dashboard/LineChart";
import Card from "./components/Dashboard/Card";
import Accordion from "./components/Dashboard/Accordion";

export interface Mood {
  date_recorded: string;
  mood: number;
}

export interface KVPair<K, V> {
  key: K;
  value: V;
}

interface MoodAlt extends KVPair<string, number> {}

function foo(mood: Mood) {
  return createElement("li", { key: mood.date_recorded }, mood.mood);
}

function bar(moods: Mood[]) {
  return <ul>{moods.map((mood) => foo(mood))}</ul>;
}

function App() {
  const [count, setCount] = useState(0);
  const [moods, setMoods] = useState<Mood[]>([]);
  const [pairs, setPairs] = useState<MoodAlt[]>([]);

  const getContent = () => {
    return (
      <>
        <ul>{moods.map((mood) => foo(mood))}</ul>
      </>
    );
  };

  useEffect(() => {
    axios.get<Mood[]>("http://localhost:3000/moods").then((res) => {
      setMoods(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get<MoodAlt[]>("http://localhost:3000/moods").then((res) => {
      setPairs(res.data);
      console.log("Fetched gens");
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <UserInput />
      <br></br>
      <Card></Card>
    </div>
  );
}

export default App;
