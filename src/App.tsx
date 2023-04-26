import { SetStateAction, createElement, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import UserInput from "./components/UserInput/UserInput";
import Dashboard from "./components/Dashboard/Dashboard";

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
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
