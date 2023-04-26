import { createElement } from "react";
import { Mood } from "../App";

export function foo(mood: Mood) {
  return createElement("li", { key: mood.date_recorded }, mood.mood);
}

export function bar(moods: Mood[]) {
  return <ul>{moods.map((mood) => foo(mood))}</ul>;
}
