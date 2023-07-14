// MyComponent should have a key name with value freeCodeCamp stored in its state.
//     Failed:MyComponent should render an h1 heading element enclosed in a single div.
//     Failed:The rendered h1 heading element should only contain text rendered from the component's state.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                { /* Change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* Change code above this line */ }
            </div>
        );
    }
};