// The constant JSX should return a div element.
//     Waiting:The div should contain a br tag.
//     Waiting:The div should contain an hr tag.

const Task = () => {
    const JSX =  <div>
        <br/>
        <hr/>
        <h2>Welcome to React!</h2>
        <p>Be sure to close all tags!</p>
    </div>

    return <div>
        {JSX}
    </div>
}
export default Task