import { TodoList, InputField } from 'components';
import { useState } from 'react';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const onChangeTextHandler = (e) => setText(e.target.value);
    const onAddHandler = () => {
        if (!text.trim().length > 0) return;

        setTodos([
            ...todos,
            {
                id: Date.now().toString(),
                text,
                complete: false,
            },
        ]);

        setText('');
    };
    const onDeleteHandler = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };
    const onCompleteHandler = (id) => {
        const editedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }

            return todo;
        });

        setTodos(editedTodos);
    };

    return (
        <div className="main">
            <InputField text={text} onChangeTextHandler={onChangeTextHandler} onAddHandler={onAddHandler} />
            <TodoList todos={todos} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler} />
        </div>
    );
}

export default App;
