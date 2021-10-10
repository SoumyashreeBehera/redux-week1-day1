import React from "react";
import { ADD_COUNT, DEC_COUNT } from "./ationTypes";

const initState = {
  counter: 0,
};

export default function Reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case DEC_COUNT:
      return {
        ...state,
        counter: state.counter - payload,
      };
    default:
      return state;
  }
}
