import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, deleteTodo, toggleStatus, addNewTodo } from 'store/todoSlice';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ fetchTodos, deleteTodo, toggleStatus, addNewTodo }, dispatch);
};
