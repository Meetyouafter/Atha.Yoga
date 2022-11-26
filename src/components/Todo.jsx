import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Todo.scoped.scss';
import TodoItem from './TodoItem.jsx';

const Todo = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.todos)

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        checked: false,
      },
    ]);
    setText('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((el) => el.id !== todoId));
  };

  const toggleChecked = (todoId) => {
    setTodos(
      todos.map((el) => {
        if (el.id !== todoId) {
          return el;
        }
        return {
            ...el,
            checked: !el.checked,
        }
      })
    );
  };

  return (
    <div className='todo_container'>
      <label>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='write here'
        />
        <button onClick={addTodo}>Add</button>
      </label>
      <ul>
        {todos.map((el) => <TodoItem todo={el} toggleChecked={toggleChecked} removeTodo={removeTodo}/>)}
      </ul>
    </div>
  );
};

export default Todo;
