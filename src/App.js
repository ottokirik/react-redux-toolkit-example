import { TodoList, InputField } from 'components';
import { useActions } from 'hooks/useActions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
    const [text, setText] = useState('');
    const { addNewTodo, fetchTodos } = useActions();
    const { status, error } = useSelector((state) => state.todos);

    const addTask = () => {
        addNewTodo({ text });
        setText('');
    };

    const onChangeTextHandler = (e) => setText(e.target.value);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="main">
            <InputField text={text} onChangeTextHandler={onChangeTextHandler} onAddHandler={addTask} />
            {status === 'loading' && <h3>Загрузка...</h3>}
            {error && <h3>{error}</h3>}
            <TodoList />
        </div>
    );
}

export default App;
