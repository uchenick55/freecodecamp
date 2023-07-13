// The React component should return a single div element.
//     Waiting:The component should return two nested elements.
//     Waiting:The component should return the ChildComponent as its second child.

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
            <p>I am the second child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Change code below this line */ }
                <ChildComponent/>
                { /* Change code above this line */ }
            </div>
        );
    }
};