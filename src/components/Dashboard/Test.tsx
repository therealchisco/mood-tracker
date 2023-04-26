import React, { useState, useEffect, createElement, ReactNode } from "react";
import axios from "axios";
import { Mood } from "../../App";

interface Props {
  func: () => JSX.Element;
}

function foo(mood: Mood) {
  return createElement("li", { key: mood.date_recorded }, mood.mood);
}

function bar(moods: Mood[]) {
  return <ul>{moods.map((mood) => foo(mood))}</ul>;
}

function Test({ func }: Props) {
  return func();
}

export default Test;
