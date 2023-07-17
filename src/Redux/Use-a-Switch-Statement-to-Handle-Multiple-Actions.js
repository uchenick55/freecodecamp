// Passed:Calling the function loginUser should return an object with type property set to the string LOGIN.
//     Passed:Calling the function logoutUser should return an object with type property set to the string LOGOUT.
//     Failed:The store should be initialized with an object with an authenticated property set to false.
//     Failed:Dispatching loginUser should update the authenticated property in the store state to true.
//     Failed:Dispatching logoutUser should update the authenticated property in the store state to false.
//     Failed:The authReducer function should handle multiple action types with a switch statement.

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                authenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false
            }
    }
    return state
    // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};