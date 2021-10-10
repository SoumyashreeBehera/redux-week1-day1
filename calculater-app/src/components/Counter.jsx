import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  decCount,
  devideCount,
  multiplyCount,
} from "../Redux/action";

export default function Counter() {
  const [data, setData] = useState(0);
  const [err, setErr] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDevide = () => {
    if (+data === 0) {
      console.log(data);
      setErr(true);
      return;
    }
    dispatch(devideCount(+data));
  };

  return (
    <div>
      <div>{err && "Error occured"}</div>
      <div>counter: {counter}</div>
      <div>
        <input
          type="number"
          value={data !== 0 ? data : null}
          onChange={(e) => setData(e.target.value)}
          placeholder="enter value"
        />
      </div>
      <div>
        <button onClick={() => dispatch(addCount(+data))}>+</button>
        <button onClick={() => dispatch(decCount(+data))}>-</button>
        <button onClick={() => dispatch(multiplyCount(+data))}>X</button>
        <button onClick={handleDevide}>/</button>
      </div>
    </div>
  );
}
