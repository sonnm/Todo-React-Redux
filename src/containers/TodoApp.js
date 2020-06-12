import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoApp() {
  return (
    <div className="shadow rounded p-5 bg-white mx-auto max-w-lg mt-16">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
