import React, { useState } from "react";

interface Props {
  mood: number;
  handleChange: (value: number) => void;
}

function Form({ mood, handleChange }: Props) {
  return (
    <>
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
    </>
  );
}

export default Form;
