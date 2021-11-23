import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App using Redux</h1>

      <div>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input className="input_value" type="text" value={myState} />
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;
