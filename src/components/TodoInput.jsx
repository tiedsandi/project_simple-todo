import {useDispatch, useSelector} from 'react-redux';
import {addTodo, addValue} from '../store/todo.store';

export default function TodoInput() {
  const dispatch = useDispatch();
  const toDoValue = useSelector((state) => state.todo.todo);

  return (
    <header>
      <input
        value={toDoValue}
        onChange={(e) => {
          dispatch(addValue(e.target.value));
        }}
        placeholder='Enter todo...'
      />
      <button
        onClick={() => {
          dispatch(addTodo(toDoValue));
        }}>
        Add
      </button>
    </header>
  );
}
