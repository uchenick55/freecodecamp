/*
The Redux store should have a value of 5 for the initial state.
    Passed:A variable currentState should exist and should be assigned the current state of the Redux store.
*/

const store = Redux.createStore(
    (state = 5) => state
);

// Change code below this line

const currentState = store.getState()