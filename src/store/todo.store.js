import {createSlice} from '@reduxjs/toolkit';

function persistData(data) {
  localStorage.setItem('todos', JSON.stringify({todos: data}));
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: ['Pergi ke tempat GYM', 'Perbanyak makan buah dan minum air', 'Kerja dan jalan-jalan'],
    todo: '',
  },
  reducers: {
    addValue: (state, action) => {
      state.todo = action.payload;
    },
    getTodos: (state) => {
      if (!localStorage) return;
      let localTodos = localStorage.getItem('todos');
      if (!localTodos) return;

      localTodos = JSON.parse(localTodos).todos;
      state.todos = localTodos;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.todo = '';
      persistData(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
      persistData(state.todos);
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      state.todo = state.todos[action.payload];
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
  },
});

export const {getTodos, addTodo, deleteTodo, updateTodo, addValue} = todoSlice.actions;

export const lastTodos = (state) => state.todos[state.todos.length - 1];

export default todoSlice.reducer;
