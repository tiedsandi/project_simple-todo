import {useState, useEffect} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {useDispatch} from 'react-redux';
import {getTodos} from './store/todo.store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
