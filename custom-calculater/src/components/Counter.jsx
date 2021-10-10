import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decCount } from "../Redux/action";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>counter: {counter}</div>
      <div></div>
      <div>
        <button onClick={() => dispatch(addCount(1))}>Add</button>
        <button onClick={() => dispatch(decCount(1))}>Dec</button>
      </div>
    </div>
  );
}
