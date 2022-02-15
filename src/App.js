import { useState } from "react";

const arr=[{id:-1,tital:'egg'}];

function App() {
  const [val, setval] = useState("");
  const [array, setarray] = useState([]);
  const inputval = (e) => {
    setval(e.target.value);
  };
  const todo = () => {
    setarray([...array, val]);
    console.log(array);
    setval("");
  };
  const remove=(index)=>{
    console.log(index);
    setarray(array.filter((val,ind)=>{
      return ind!==index;
    }))
  }
  return (
    <>
      <input onChange={inputval} value={val} type="text" />
      <button onClick={todo}>Add</button>
      {array.map((val, index) => {
        return (
          <>
            <p key={index}>{val}</p>
            <button onClick={()=>{
              remove(index);
            }}>remove</button>
          </>
        );
      })}
    </>
  );
}

export default App;
