/*The constant JSX should return a div element.
    Waiting:The div should contain an h1 tag as the first element.
    Waiting:The div should contain a p tag as the second element.
    Waiting:The provided JSX element should render to the DOM node with id challenge-node.*/

const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Add your code below this line

<div id='challenge-node'></div>
ReactDOM.render(JSX, document.getElementById('challenge-node'))
