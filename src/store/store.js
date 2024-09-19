import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todo.store.js';

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
