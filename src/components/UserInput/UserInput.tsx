import React, { useState } from "react";
import Form from "./Form";
import HUD from "./HUD";
import useMoods from "../../hooks/useMoods";
import moodService, { Mood } from "../../services/moodService";

interface Props {
  handleSubmit: (mood: number) => void;
}

function UserInput({ handleSubmit }: Props) {
  const { mood, setMood, error, setError } = useMoods();

  const submit = () => {
    const newMood = { date: new Date(), mood: mood };
    moodService.create<Mood>(newMood).catch((err) => setError(err.message));
    console.log(newMood);
    // handleSubmit(mood);
  };

  return (
    <>
      <HUD moodKey={mood}></HUD>
      <Form mood={mood} handleChange={setMood} handleSubmit={submit}></Form>
    </>
  );
}

export default UserInput;
