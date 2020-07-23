import { createStore } from "redux";

// Action generators - these are functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count: count,
});

const resetCount = () => ({
  type: "RESET",
});

// reducers section
// 1. a reducer is a pure function
//    the output is a result of the input and only the input
//
// 2. Never change state or action
//    if you are directly changing the state, then you are most likely just trying to mutate it
//    in these cases, it is better to just return it on the new state object instead

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count:
          state.count -
          (typeof action.decrementBy === "number" ? action.decrementBy : 1),
      };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// the unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// the increment dispatch calls for the example
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// the reset dispatch calls for the example
store.dispatch(resetCount());

// the decrement dispatch calls for the example
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 11 }));

// the set dispatch calls for the example
store.dispatch(setCount({ count: 101 }));
