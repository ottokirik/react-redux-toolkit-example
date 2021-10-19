import { TodoList, InputField } from 'components';
import { useActions } from 'hooks/useActions';
import { useState } from 'react';

import './App.css';

function App() {
    const [text, setText] = useState('');
    const { addTodo } = useActions();

    const addTask = () => {
        addTodo({ text });
        setText('');
    };

    const onChangeTextHandler = (e) => setText(e.target.value);

    return (
        <div className="main">
            <InputField text={text} onChangeTextHandler={onChangeTextHandler} onAddHandler={addTask} />
            <TodoList />
        </div>
    );
}

export default App;
