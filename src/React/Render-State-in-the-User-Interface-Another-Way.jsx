// Passed:MyComponent should have a key name with value freeCodeCamp stored in its state.
//     Failed:MyComponent should render an h1 heading element enclosed in a single div.
//     Failed:The rendered h1 tag should include a reference to {name}.
//     Failed:The rendered h1 heading element should contain text rendered from the component's state.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        // Change code below this line
        const name = this.state.name
        // Change code above this line
        return (
            <div>
                { /* Change code below this line */ }
                <h1>{name}</h1>
                { /* Change code above this line */ }
            </div>
        );
    }
};