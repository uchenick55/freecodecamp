/*
Третий дочерний элемент компонента ToDo должен быть экземпляром компонента List.
    Пройдено :Пятый дочерний элемент компонента ToDo должен быть экземпляром компонента List.
    Ошибка :Оба экземпляра компонента List должны иметь вызываемое свойство tasks и tasks должны иметь тип массива.
    Ошибка :Первый List компонент, представляющий задачи на сегодня, должен состоять из 2 и более пунктов.
    Ошибка :Второй List компонент, представляющий задачи на завтра, должен состоять из 3 и более пунктов.
    Ошибка :Компонент List должен отображать значение из tasks реквизита в p теге.
*/


const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Change code below this line */ }
                <List tasks={["green", "blue"]}/>
                <h2>Tomorrow</h2>
                <List tasks={["green", "blue", "red"]}/>
                { /* Change code above this line */ }
            </div>
        );
    }
};