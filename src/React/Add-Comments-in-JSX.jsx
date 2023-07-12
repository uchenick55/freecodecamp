// The constant JSX should return a div element.
//     Waiting:The div should contain an h1 tag as the first element.
//     Waiting:The div should contain a p tag as the second element.
//     Waiting:The existing h1 and p elements should not be modified.
//     Waiting:The JSX should use valid comment syntax.

const Task = () => {
    const JSX =
        <div>
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>{/*valid comment*/}
        </div>
    ;
    return <div>
        {JSX}
    </div>
}
export default Task