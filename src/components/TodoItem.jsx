import { useActions } from 'hooks/useActions';

export const TodoItem = ({ id, complete, text }) => {
    const { toggleTodoComplete, removeTodo } = useActions();

    return (
        <li className="todo-item">
            <div>
                <input
                    className="todo-check"
                    type="checkbox"
                    checked={complete}
                    onChange={() => toggleTodoComplete({ id })}
                />
                <span>{text}</span>
            </div>
            <span className="todo-delete" onClick={() => removeTodo({ id })}>
                &times;
            </span>
        </li>
    );
};
