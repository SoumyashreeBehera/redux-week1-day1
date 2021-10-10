import {
  ADD_COUNT,
  DEC_COUNT,
  DEVIDE_COUNT,
  MULTIPLY_COUNT,
} from "./ationTypes";

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
export const multiplyCount = (payload) => {
  return {
    type: MULTIPLY_COUNT,
    payload: payload,
  };
};
export const devideCount = (payload) => {
  return {
    type: DEVIDE_COUNT,
    payload: payload,
  };
};
