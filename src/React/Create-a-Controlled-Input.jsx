/*
    Failed:ControlledInput should return a div element which contains an input and a p tag.
    Passed:The state of ControlledInput should initialize with an input property set to an empty string.
    Failed:Typing in the input element should update the state and the value of the input, and the p element should render this state as you type.*/
import React from "react";

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // Change code below this line
        this.handleInput = this.handleInput.bind(this)
        // Change code above this line
    }
    // Change code below this line
    handleInput (value) {
        //this.setState({this.state.input: value})
        this.setState(prevState => {
            return {
                ...prevState,
                input: value
            }
        })
        console.log(value)
    }
    // Change code above this line
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <input value ={this.state.input} onChange={(e)=>this.handleInput(e.target.value)}/>
                { /* Change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};
export default ControlledInput