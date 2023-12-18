const { createStore } = require("redux");

//Initial state
const initialState = {
  count: 0,
};

// actions - action action-creator
//increment
//decrement
//reset
//increaseByAmount

//action
{
  type: "Increment";
}

//increase action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

//decrease action creator
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

//reset action creator
const resetAction = () => {
  return {
    type: "RESET",
  };
};

//increase by amount action creator
const increaseByAmtAction = (amount) => {
  return {
    type: "INCREASE_BY_AMT",
    payload: amount,
  };
};

//reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === "RESET") {
    return {
      count: 0,
    };
  }
  if (action.type === "INCREASE_BY_AMT") {
    return {
      count: state.count + action.payload,
    };
  }
};

//store
const store = createStore(counterReducer);

//subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch action
store.dispatch(incrementAction());
store.dispatch(increaseByAmtAction(10));
store.dispatch(decrementAction());
store.dispatch(resetAction());
