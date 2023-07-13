/*
There should be a React component called MyComponent.
    Failed:MyComponent should contain an h1 tag with text My First React Component! Case and punctuation matter.
    Failed:MyComponent should render to the DOM.
    Failed:MyComponent should have a constructor calling super with props.*/


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>My First React Component!</h1>
        </div>

    }
}

<div id='challenge-node'></div>

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))