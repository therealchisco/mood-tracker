import React, { useState } from "react";

interface Props {
  mood: number;
  handleChange: (value: number) => void;
}

function aha(mood: number) {
  const dateTime = new Date();
  const x = { date: dateTime, mood: mood };
  console.log(x);
}

function Form({ mood, handleChange }: Props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aha(mood);
      }}
    >
      <label htmlFor="customRange2" className="form-label">
        <strong>currently feeling</strong>
      </label>
      <input
        type="range"
        className="form-range text-secondary"
        min="0"
        max="6"
        id="customRange2"
        onChange={(event) => {
          handleChange(parseInt(event.target.value));
        }}
        defaultValue={mood}
      ></input>
      <button className="btn btn-outline-primary btn-lg">
        <strong>Submit</strong>
      </button>
    </form>
  );
}

export default Form;
