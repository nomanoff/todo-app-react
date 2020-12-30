import React, { useState } from "react";

function App() {
  const [inputs, setInputs] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    let userInput = e.target.value;
    setInputs(userInput);
  }

  function handleClick() {
    inputs &&
      setItems((prevItems) => {
        return [...prevItems, inputs];
      });

    setInputs("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputs} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
