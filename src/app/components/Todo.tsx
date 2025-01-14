'use client';

import React, { useState } from 'react';
export default function Todo() {

  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [todoConfig, setTodoConfig] = useState<{ [key: string]: { done: boolean } }>({});

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    const updatedTodoConfig = { ...todoConfig };
    delete updatedTodoConfig[`todo-${index}`];
    setTodoConfig(updatedTodoConfig);
  };

  const handleDoneTodo = (index: number) => {
    setTodoConfig({ ...todoConfig, [`todo-${index}`]: { done: true } });
  };

  return (
    <div className="">
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-l py-2 px-4 w-full"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="">
            <span className={`${todoConfig[`todo-${index}`]?.done === true ? 'line-through' : ''}`}>{todo}</span>
            { todoConfig[`todo-${index}`]?.done !== true && (
              <button
                className="ml-2 text-green-500 hover:text-green-600"
                onClick={() => handleDoneTodo(index)}
              >
                Done
              </button>
            ) }
            { todoConfig[`todo-${index}`]?.done === true && (
              <button
                className="ml-2 text-red-500 hover:text-red-600"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            ) }
          </li>
        ))}
      </ul>
    </div>
  );
}