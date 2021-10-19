import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onCompleteHandler, onDeleteHandler }) => {
    return (
        <ul className="todo-container">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onCompleteHandler={onCompleteHandler}
                    onDeleteHandler={onDeleteHandler}
                />
            ))}
        </ul>
    );
};
