// The TypesOfFood component should return a single div element.
//     Waiting:The TypesOfFood component should render the Fruits component after the h1 element.
//     Waiting:The TypesOfFood component should render the Vegetables component after Fruits.
//     Waiting:The TypesOfFood component should render to the DOM within the div with the id challenge-node.


class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits/>
                <Vegetables/>
                {/* Change code above this line */}
            </div>
        );
    }
};

// Change code below this line
<div id='challenge-node'></div>

ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'))
