import React from 'react';

const TodoItem = ({todo, toggleChecked, removeTodo}) => {
  return (
    <li key={todo.id}>
      <input
        type='checkbox'
        checked={todo.checked}
        onChange={() => toggleChecked(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>delete</button>
    </li>
  );
};

export default TodoItem;
