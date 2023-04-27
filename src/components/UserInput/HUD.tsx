import React from "react";

interface Props {
  moodKey: number;
}

function HUD({ moodKey }: Props) {
  const emojiDict: { [key: number]: string } = {
    0: "😢",
    1: "😞",
    2: "😔",
    3: "😐",
    4: "🙂",
    5: "😊",
    6: "😁",
    7: "😃",
    8: "🤩",
    9: "😍",
    10: "🤩",
  };

  return <h1 id="emoji">{emojiDict[moodKey]}</h1>;
}

export default HUD;
