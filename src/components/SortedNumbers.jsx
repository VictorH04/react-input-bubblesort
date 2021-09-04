import "../index.css";
const sortedNumbers = ({ beforeSort, inputNums, noNums }) => {
  return (
    <>
      {!beforeSort ? <p className="noNums">{noNums}</p> : <p className="sortedNums">Before: {beforeSort} <br /> After: {inputNums}</p>}
    </>
  );
};

export default sortedNumbers;
