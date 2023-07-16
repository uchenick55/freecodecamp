// MyForm should return a div element which contains a form and an h1 tag. The form should include an input and a button.
//     Passed:The state of MyForm should initialize with input and submit properties, both set to empty strings.
//     Passed:Typing in the input element should update the input property of the component's state.
// Failed:Submitting the form should run handleSubmit which should set the submit property in state equal to the current input.
//     Failed:handleSubmit should call event.preventDefault
// Failed:The h1 heading element should render the value of the submit field from the component's state.

import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        // Change code below this line
        event.preventDefault()
        this.setState(prevState => {
            return {
                ...prevState,
                submit: prevState.input
            }
        })
        // Change code above this line
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Change code below this line */}
                    <input onChange={this.handleChange} value={this.state.input}/>
                    {/* Change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Change code below this line */}
                <h1>{this.state.submit}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

export default MyForm
