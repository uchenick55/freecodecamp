/*The Redux store should exist.
    Passed:The Redux store should have a value of 5 for the state.*/

import * as Redux from "redux";

const reducer = (state = 5) => {
    return state;
}


// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
export const store = Redux.createStore(reducer);

window.store = store