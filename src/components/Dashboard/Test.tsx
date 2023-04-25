import React, { useState, useEffect, createElement, ReactNode } from "react";
import axios from "axios";
import { Mood } from "../../App";

interface Props {
  moods: Mood[];
}

function foo(mood: Mood) {
  return createElement("li", { key: mood.date_recorded }, mood.mood);
}

function bar(moods: Mood[]) {
  return <ul>{moods.map((mood) => foo(mood))}</ul>;
}

function Test({ moods }: Props) {
  return bar(moods);
}

export default Test;
