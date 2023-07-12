// The constant JSX should return a div element.
//     Waiting:The div should contain an h1 tag as the first element.
//     Waiting:The div should contain a p tag as the second element.
//     Waiting:The div should contain a ul tag as the third element.
//     Waiting:The ul should contain three li elements.

const Task = () => {
    const JSX = <div>
        <h1></h1>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>;
    return <div>
        {JSX}
    </div>
}
export default Task