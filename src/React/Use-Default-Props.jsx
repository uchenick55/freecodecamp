// The ShoppingCart component should render.
//     Waiting:The ShoppingCart component should have a default prop of { items: 0 }.


const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }
