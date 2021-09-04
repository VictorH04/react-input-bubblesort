import "../index.css";
const Form = ({ inputNums, setInputNums, handleNumbers, handleReset }) => {
  return (
    <form className="Form" onSubmit={handleNumbers}>
      <input
        className="Form-input"
        id="Numbers"
        required
        type="number"
        min="0"
        value={inputNums}
        onChange={(e) => setInputNums(e.target.value)}
      />
      <button className="Form-btn" type="submit">
        Sort
      </button>
      <button
        className="Form-reset"
        type="button"
        onClick={(e) => handleReset(e)}
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
