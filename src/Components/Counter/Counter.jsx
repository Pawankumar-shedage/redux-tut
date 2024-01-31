import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./CounterAction";

export const Counter = () => {
  const dispatchAction = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>

      <button onClick={() => dispatchAction(Increment())}>Increment</button>
      <button onClick={() => dispatchAction(Decrement())}>Decrement</button>
    </div>
  );
};
