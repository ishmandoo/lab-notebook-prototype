import { combineReducers } from "redux";

export default function reducer(state={counter:1}, action) {
  return {counter:state.counter + 1}
}
