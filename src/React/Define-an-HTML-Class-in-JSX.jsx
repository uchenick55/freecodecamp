/*The constant JSX should return a div element.
    Waiting:The div should have a class of myDiv.*/

const Task = () => {
    const JSX = (
        <div className='myDiv'>
            <h1>Add a class to this div</h1>
        </div>
    );
    return <div>
        {JSX}
    </div>
}
export default Task