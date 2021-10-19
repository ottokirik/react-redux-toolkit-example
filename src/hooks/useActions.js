import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'store/todoSlice';
import { fetchTodos, deleteTodo, toggleStatus, addNewTodo } from 'store/todoSlice';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ ...actions, fetchTodos, deleteTodo, toggleStatus, addNewTodo }, dispatch);
};
