/*The TypesOfFood component should return a single div element.
    Waiting:The TypesOfFood component should return the Fruits component.
    Waiting:The Fruits component should return the NonCitrus component and the Citrus component.
    Waiting:The TypesOfFood component should return the Vegetables component below the Fruits component.*/

class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* Change code below this line */ }
                <NonCitrus/>
                <Citrus/>
                { /* Change code above this line */ }
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits/>
                <Vegetables/>
                { /* Change code above this line */ }
                <Vegetables />
            </div>
        );
    }
};