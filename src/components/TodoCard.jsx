import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../store/todo.store';

export default function TodoCard(props) {
  const {children, index} = props;
  const dispatch = useDispatch();
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => dispatch(updateTodo(index))}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button onClick={() => dispatch(deleteTodo(index))}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
}
