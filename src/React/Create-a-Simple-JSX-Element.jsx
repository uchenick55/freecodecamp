// The constant JSX should return an h1 element.
//     Waiting:The h1 tag should include the text Hello JSX!

const Task = () => {
    const JSX = <h1>Hello JSX!</h1>;
    return <div>
        {JSX}
    </div>
}
export default Task