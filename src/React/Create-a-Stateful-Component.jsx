/*
StatefulComponent should exist and render.
    Failed:StatefulComponent should render a div and an h1 element.
    Failed:The state of StatefulComponent should be initialized with a property firstName set to a string.
    Failed:The property firstName in the state of StatefulComponent should render in the h1 element.*/

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // Only change code below this line

        // Only change code above this line
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};