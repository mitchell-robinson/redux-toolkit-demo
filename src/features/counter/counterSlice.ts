import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//createSlice is the main RTK fn. to define Redux logic
//PayloadAction is a TypeScript type that represents Action object content

//create TS interface to type our state
type CounterState = {
  value: number;
  dog: string;
};

//initialize typed state
const initialState: CounterState = {
  value: 0,
  dog: "Heath",
};

//[name]/[reducerFn] set as action dispatched (devtools)
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //replaces the 'newState' copy flow typically found with Redux
    incremented(state) {
      //RTK LOOKS like it's mutating state here
      //but it's actually using something called Immer
      //to track the 'mutations' and does the copy/map logic behind the scenes
      //magic!
      state.value++; //increase state by one
    },
    addAmount(state, action: PayloadAction<number>) {
      //example with payload => 2nd argument for reducer
      //set action as PayloadAction<[payloadType]>
      //then define how the action.payload affects the statevalue
      state.value += action.payload;
    },
  },
});

//createSlice generates an actionCreator for each functions in the `reducers` obj above
//hover over 'incremented' to see it knows it's an action creator without a payload
export const { incremented, addAmount } = counterSlice.actions;
export default counterSlice.reducer;

//What'd we do here?
//// 1) Define state (lns 6-13)
//// 2) Use createSlice to set name, state and define reducers
//// 3) export action creators
