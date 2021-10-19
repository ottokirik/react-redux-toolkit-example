import { useActions } from 'hooks/useActions';

export const TodoItem = ({ id, completed, title }) => {
    const { toggleStatus, deleteTodo } = useActions();

    return (
        <li className="todo-item">
            <div>
                <input
                    className="todo-check"
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleStatus({ id })}
                />
                <span>{title}</span>
            </div>
            <span className="todo-delete" onClick={() => deleteTodo({ id })}>
                &times;
            </span>
        </li>
    );
};
