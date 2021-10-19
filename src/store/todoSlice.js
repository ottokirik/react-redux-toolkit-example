import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${baseURL}?_limit=20`);

        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async ({ id }, { rejectWithValue, dispatch }) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Ошибка удаления данных');
        }

        dispatch(actions.removeTodo({ id }));
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async ({ id }, { rejectWithValue, dispatch, getState }) => {
        const { todos } = getState().todos;
        const todo = todos.find((item) => item.id === id);

        try {
            const response = await fetch(`${baseURL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                }),
            });

            if (!response.ok) {
                throw new Error('Ошибка обновления данных');
            }

            dispatch(actions.toggleTodoComplete({ id }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function ({ text }, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };

            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });

            if (!response.ok) {
                throw new Error('Ошибка добавления данных');
            }

            const data = await response.json();

            dispatch(actions.addTodo({ data }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'error';
    state.error = action.payload;
};

const setLoading = (state) => {
    state.status = 'loading';
    state.error = null;
};

const setFullfield = (state) => {
    state.status = 'done';
    state.error = null;
};

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload.data);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodoComplete(state, action) {
            const toggled = state.todos.find((todo) => todo.id === action.payload.id);
            toggled.completed = !toggled.completed;
        },
    },
    extraReducers: {
        [fetchTodos.pending]: setLoading,
        [deleteTodo.pending]: setLoading,
        [toggleStatus.pending]: setLoading,
        [addNewTodo.pending]: setLoading,
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'done';
            state.todos = action.payload;
            state.error = null;
        },
        [toggleStatus.fulfilled]: setFullfield,
        [addNewTodo.fulfilled]: setFullfield,
        [deleteTodo.fulfilled]: setFullfield,
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
        [addNewTodo.fulfilled]: setError,
    },
});

const { actions } = todoSlice;

export const { reducer } = todoSlice;
