// Passed:MyComponent should return a div element which wraps two elements, a button and an h1 element, in that order.
//     Passed:The state of MyComponent should initialize with the key value pair { text: "Hello" }.
//     Failed:Clicking the button element should run the handleClick method and set the state text to You clicked!.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        // Change code below this line
        this.handleClick = this.handleClick.bind(this)    // Change code above this line
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }
    render() {
        return (
            <div>
                { /* Change code below this line */ }
                <button onClick={this.handleClick}>Click Me</button>
                { /* Change code above this line */ }
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};