import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import SortedNumbers from "./components/SortedNumbers";

function App() {
  const [inputNums, setInputNums] = useState("");
  const [beforeSort, setBeforeSort] = useState("");

  const bubbleSort = (arr) => {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };

  const handleNumbers = (e) => {
    e.preventDefault();
    setBeforeSort(Array.from(inputNums.toString()).map(Number) + "");
    const splitNumbers = Array.from(inputNums.toString()).map(Number);
    setInputNums(bubbleSort(splitNumbers) + "");

    console.log(splitNumbers);
  };

  const handleReset = (e) => {
    e.preventDefault();

    setBeforeSort("");
    setInputNums("");
  }

  console.log(inputNums);
  return (
    <div className="App">
      <div className="wrap">
        <Header headerText="Bubblesorted Input" />
        <Form
          handleNumbers={handleNumbers}
          handleReset={handleReset}
          inputNums={inputNums}
          setInputNums={setInputNums}
        />
        <SortedNumbers
          beforeSort={beforeSort}
          inputNums={inputNums}
          noNums="Nothing to sort! Please input some numbers!"
        />
      </div>
    </div>
  );
}

export default App;
