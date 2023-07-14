/*
The state of MyComponent should initialize with the key value pair { name: Initial State }.
Passed:MyComponent should render an h1 heading element.
    Passed:The rendered h1 heading element should contain text rendered from the component's state.
Failed:Calling the handleClick method on MyComponent should set the name property in state to equal React Rocks!.*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // Change code below this line
        this.setState({name: "React Rocks!"})
        // Change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};