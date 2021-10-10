import { ADD_COUNT, DEC_COUNT } from "./ationTypes";

export const addCount = (payload) => {
  return {
    type: ADD_COUNT,
    payload: payload,
  };
};
export const decCount = (payload) => {
  return {
    type: DEC_COUNT,
    payload: payload,
  };
};
