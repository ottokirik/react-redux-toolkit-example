import { configureStore } from '@reduxjs/toolkit';
import { reducer as todoReducer } from './todoSlice';

export const store = configureStore({
    reducer: { todos: todoReducer },
});
