import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos } = useSelector((state) => state.todos);

    return (
        <ul className="todo-container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};
