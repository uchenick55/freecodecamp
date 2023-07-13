/*
The component ShoppingCart should render.
    Passed:The component Items should render.
    Failed:The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.*/
import React from "react";
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

export class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* Change code below this line */ }
        return <Items quantity={10}/>
        { /* Change code above this line */ }
    }
};

