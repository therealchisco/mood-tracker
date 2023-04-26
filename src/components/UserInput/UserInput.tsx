import React, { useState } from "react";
import Form from "./Form";
import HUD from "./HUD";

interface Props {
  handleSubmission: () => void;
}

function UserInput() {
  const [mood, setMood] = useState(3);
  return (
    <>
      <HUD moodKey={mood}></HUD>
      <Form mood={mood} handleChange={setMood}></Form>
    </>
  );
}

export default UserInput;
