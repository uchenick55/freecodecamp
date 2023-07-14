// MyComponent should return a div element which contains a button.
//     Passed:The state of MyComponent should initialize with a visibility property set to false.
//     Failed:Clicking the button element should toggle the visibility property in state between true and false.
//     Failed:An anonymous function should be passed to setState.
//     Passed:this should not be used inside setState
import React from "react";

 class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // Change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this)
        // Change code above this line
    }
    // Change code below this line
    toggleVisibility () {

        this.setState(prevState =>{
            return{
                ...prevState,
                visibility : !prevState.visibility
            }
        })

    }
    // Change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}
export default MyComponent