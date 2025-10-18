import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
      tag: '' // Optional, can be added later
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const incompleteCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <Header incompleteCount={incompleteCount} />
      <AddTodo onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleComplete} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default App;