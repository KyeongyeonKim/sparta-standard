import "./App.css";
import { useState } from "react";

function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];
  // useState 결과물은 배열이다. [state, state를 제어하는 함수]가 리턴됨
  // 위에 내용이 [array, setArray]에 구조분해할당으로 할당되는 것.
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  // 함수들
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);

    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 필터링을 할지 말지를 return문에서 결정. true면 전부 출력
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    // map의 역할 -> 원본배열의 (가공)복제!!
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const testArr = [4, 1, 2, 10, 5];
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    // input 태그에 입력한 값이 결과물 끝에 달라붙도록!
    if (!query) {
      alert("값을 입력하세요!");
      return false;
    }
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

  //slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
  const handleSlice = () => {
    const newArr = array.slice(0, -2);
    setResult(newArr.join(", "));
  };

  // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setResult(newArr.join(", "));
  };

  // indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환
  const handleIndexOf = () => {
    if (!query) {
      alert("값을 입력하세요!");
      return false;
    }
    setResult(array.indexOf(query));
  };

  // // includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 true 또는 false를 반환
  const handleIncludes = () => {
    if (array.includes(query)) {
      return setResult("true");
    } else setResult("false");
  };

  const handleFind = () => {
    const found = array.find((fruit) => {
      if (fruit.includes(query)) {
        return fruit;
      } //else return "Not Found";
    });
    setResult(found);
  };

  const handleSome = () => {
    const fruit = array.some((fruit) => fruit.includes(query));
    setResult(fruit);
  };

  const handleEvery = () => {
    const fruit = array.every((fruit) => fruit.length > 5);
    setResult(fruit);
  };

  const handleSort = () => {
    const newArr = [...array];
    setArray(array);
    setResult(newArr.sort().join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        {/* onClick={function(){}} 컴포넌트 내부에 작성하는 방식 : inline방식 */}
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
      </div>
      <div>
        <strong>Array :</strong> {array.join(", ")}
      </div>
      <div>
        <strong>Result :</strong> {result}
      </div>
    </div>
  );
}

export default App;
