interface Props {
  mood: number;
  handleChange: (value: number) => void;
  handleSubmit: (value: number) => void;
}

function Form({ mood, handleChange, handleSubmit }: Props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(mood);
      }}
    >
      <label htmlFor="customRange2" className="form-label">
        <em>currently feeling</em>
      </label>
      <input
        type="range"
        className="form-range text-secondary"
        min="0"
        max="8"
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
