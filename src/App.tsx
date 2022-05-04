import "./App.css";
//import our replacement useDispatch and replacement useAppSelectors created in hooks.ts
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { addAmount, incremented } from "./features/counter/counterSlice";

function App() {
  //use our custom selector to extract the counter state for our counter value
  //hover over each to see the type definitions
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };

  const handleAddAmount = () => {
    dispatch(addAmount(5));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Good Morning Office Hours</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleAddAmount}>
            Increase Count By 5
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
