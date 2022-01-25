import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

function Counter() {
  const myState = useSelector((i) => i.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{myState}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default Counter;
