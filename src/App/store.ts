import { configureStore } from "@reduxjs/toolkit";
//configureStore is a wrapper around the normal redux createStore
//automatically sets up store with the right defaults
//also provides Redux Devtools and Thunk middleware OOTB
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // reducer obj works the same way that combineReducer does in normal redux
  reducer: { counter: counterReducer },
  // will create a `state.counter` field in our state, and a state.[reducer] for anything else added here
});

//export types based on our store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
