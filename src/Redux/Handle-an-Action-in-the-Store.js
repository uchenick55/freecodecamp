// Passed:Calling the function loginAction should return an object with type property set to the string LOGIN.
//     Failed:The store should be initialized with an object with property login set to false.
//     Failed:Dispatching loginAction should update the login property in the store state to true.
//     Failed:If the action is not of type LOGIN, the store should return the current state.
const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: true
            }
    }

    return state
    // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};