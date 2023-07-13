/*The App component should return a single div element.
    Passed:The child of App should be the Welcome component.
    Failed:The Welcome component should have a prop called name.
    Failed:The Welcome component should display the string you pass as the name prop within strong tags.*/

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */ }
                <Welcome name={'John'}/>
                { /* Change code above this line */ }
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */ }
                <p>Hello, <strong>{this.props.name}</strong>!</p>
                { /* Change code above this line */ }
            </div>
        );
    }
};