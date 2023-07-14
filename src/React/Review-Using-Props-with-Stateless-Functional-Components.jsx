// The CampSite component should render.
//     Failed:The Camper component should render.
//     Failed:The Camper component should include default props which assign the string CamperBot to the key name.
//     Failed:The Camper component should include prop types which require the name prop to be of type string.
//     Failed:The Camper component should contain a p element with only the text from the name prop.

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // Only change code below this line
        this.state = {
            firstName: "123"
        }
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