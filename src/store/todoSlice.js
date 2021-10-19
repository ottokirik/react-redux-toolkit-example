import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({ id: Date.now().toString(), text: action.payload.text, complete: false });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodoComplete(state, action) {
            const toggled = state.todos.find((todo) => todo.id === action.payload.id);
            toggled.complete = !toggled.complete;
        },
    },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export const { reducer } = todoSlice;
