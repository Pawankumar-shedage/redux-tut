import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./CounterAction";

export const Counter = () => {
  const dispatchAction = useDispatch();

  // current state of the app from the store.
  const counter = useSelector((state) => {
    console.log("App state: ", state);
    return state.counter;
  });

  return (
    <div>
      {/* App */}
      <h2>Counter</h2>
      <p>{counter}</p>

      <button
        onClick={() => {
          console.log("Dispatch incr action.-> ");
          return dispatchAction(Increment());
        }}
      >
        Increment
      </button>
      <button onClick={() => dispatchAction(Decrement())}>Decrement</button>
    </div>
  );
};
