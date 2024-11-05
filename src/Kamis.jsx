import { useEffect, useMemo, useRef, useState } from "react";
import { sculptureList } from "./assets/data.js";

function Kamis() {
  // const [index, setIndex] = useState(0);

  // function handleClick() {
  //   setIndex(index + 1);
  // }

  // let sculpture = sculptureList[index];
  // return (
  //   <>
  //     <button onClick={handleClick}>Next</button>
  //     <h2>
  //       <i>{sculpture.name} </i>
  //       by {sculpture.artist}
  //     </h2>
  //     <h3>
  //       ({index + 1} of {sculptureList.length})
  //     </h3>
  //     <img src={sculpture.url} alt={sculpture.alt} />
  //     <p>{sculpture.description}</p>
  //   </>
  // );

  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button style={{ marginLeft: "1rem" }} onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

export default Kamis;
