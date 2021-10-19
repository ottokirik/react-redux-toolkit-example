import { TodoList, InputField } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';

import './App.css';

function App() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({ text }));
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
