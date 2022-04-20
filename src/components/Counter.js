import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increase());
  };
  const incrementByHandler = () => {
    dispatch(counterActions.incrementBy(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div className="">
        <button onClick={decrementHandler}> Decrement </button>
        <button onClick={incrementByHandler}> Increment by 10 </button>
        <button onClick={incrementHandler}> Increment </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
