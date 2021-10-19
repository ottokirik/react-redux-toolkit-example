export const TodoItem = ({ id, complete, text, onCompleteHandler = () => {}, onDeleteHandler = () => {} }) => {
    return (
        <li className="todo-item">
            <div>
                <input
                    className="todo-check"
                    type="checkbox"
                    checked={complete}
                    onChange={() => onCompleteHandler(id)}
                />
                <span>{text}</span>
            </div>
            <span className="todo-delete" onClick={() => onDeleteHandler(id)}>
                &times;
            </span>
        </li>
    );
};
