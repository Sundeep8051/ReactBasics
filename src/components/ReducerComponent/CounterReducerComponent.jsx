import React, { useReducer } from "react";
import { produce } from "immer";
import Button from "../ReusableComponents/Button/ButtonComponent.jsx";

const INCREMENT_COUNTER = "increment-counter";
const DECREMENT_COUNTER = "decrement-counter";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

//commented code in the below switch statement is used when there is no immer
const CounterReducerComponent = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNTER: {
        // return {
        //   ...state,
        //   count: state.count + 1,
        // };
        state.count += 1;
        return;
      }
      case DECREMENT_COUNTER: {
        // return {
        //   ...state,
        //   count: state.count - 1,
        // };
        state.count -= 1;
        return;
      }
      case SET_VALUE_TO_ADD: {
        // return {
        //   ...state,
        //   valueToAdd: action.payload,
        // };
        state.valueToAdd = action.payload;
        return;
      }
      case ADD_VALUE_TO_COUNT: {
        // return {
        //   ...state,
        //   count: state.count + state.valueToAdd,
        //   valueToAdd: "",
        // };
        state.count += state.valueToAdd;
        state.valueToAdd = "";
        return;
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 10,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNTER });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNTER });
  };

  const handleChange = (event) => {
    let value = parseInt(event.target.value) || 0;
    console.log(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleAddToCount = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <div>
      <h3>Total: {state.count}</h3>
      <div className="flex">
        <Button primary onClick={handleIncrement}>
          Increment
        </Button>
        <Button primary onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
      <form>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="border-blue-400 border-2"
        />
        <Button onClick={handleAddToCount} primary>
          Add to count
        </Button>
      </form>
    </div>
  );
};
export default CounterReducerComponent;
