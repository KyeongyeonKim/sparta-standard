import React, { useState } from "react";
import "./App.css";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleForEach = () => {
    let result = "";
    array.forEach((item, index) => {
      result += `${index}: ${item}, `;
    });
    setResult(result.slice(0, -2));
  };

  const handleFilter = () => {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = () => {
    const mapped = array.map((item) => item.toUpperCase());
    setResult(mapped.join(", "));
  };

  const handleReduce = () => {
    const reduced = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResult(reduced);
  };

  const handlePush = () => {
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const sliced = array.slice(1, 4);
    setResult(sliced.join(", "));
  };

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = () => {
    const index = array.indexOf(query);
    setResult(index.toString());
  };

  const handleIncludes = () => {
    const includes = array.includes(query);
    setResult(includes.toString());
  };

  const handleFind = () => {
    const found = array.find((item) => item.includes(query));
    setResult(found || "Not Found");
  };

  const handleSome = () => {
    const some = array.some((item) => item.includes(query));
    setResult(some.toString());
  };

  const handleEvery = () => {
    const every = array.every((item) => item.length > 2);
    setResult(every.toString());
  };

  const handleSort = () => {
    const sorted = [...array].sort();
    setArray(sorted);
    setResult(sorted.join(", "));
  };

  const handleJoin = () => {
    const joined = array.join(", ");
    setResult(joined);
  };

  return (
    <div className="App">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter text"
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <strong>원본배열 :</strong> {array.join(", ")}
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <strong>결과물 :</strong> {result}
      </div>
    </div>
  );
}

export default App;
