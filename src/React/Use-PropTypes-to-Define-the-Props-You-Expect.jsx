// The ShoppingCart component should render.
//     Passed:The Items component should render.
//     Failed:The Items component should include a propTypes check to require a
//          value for quantity and ensure that its value is a number.

import * as PropTypes from "prop-types";

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
    quantity: PropTypes.number.isRequired
}
// Change code above this line

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};