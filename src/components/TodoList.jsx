import React from 'react';
import TodoCard from './TodoCard';
import {useSelector} from 'react-redux';

export default function TodoList() {
  const TodoList = useSelector((state) => state.todo.todos);

  return (
    <ul className='main'>
      {TodoList &&
        TodoList.map((todo, todoIndex) => (
          <TodoCard key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        ))}
    </ul>
  );
}
