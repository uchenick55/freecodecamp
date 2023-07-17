// Failed:The function actionCreator should exist.
//     Passed:Running the actionCreator function should return the action object.
//     Passed:The returned action should have a key property type with value LOGIN.
const action = {
    type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
    return action
}