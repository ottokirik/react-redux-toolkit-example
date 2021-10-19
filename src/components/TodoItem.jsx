import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from 'store/todoSlice';

export const TodoItem = ({ id, complete, text }) => {
    const dispatch = useDispatch();

    return (
        <li className="todo-item">
            <div>
                <input
                    className="todo-check"
                    type="checkbox"
                    checked={complete}
                    onChange={() => dispatch(toggleTodoComplete({ id }))}
                />
                <span>{text}</span>
            </div>
            <span className="todo-delete" onClick={() => dispatch(removeTodo({ id }))}>
                &times;
            </span>
        </li>
    );
};
