import React from 'react';
import { Check, Trash2 } from 'lucide-react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`list-item ${todo.completed ? 'completed' : ''}`} role="listitem">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-checked={todo.completed}
        id={`todo-${todo.id}`}
      />
      <label htmlFor={`todo-${todo.id}`} className="item-text">
        {todo.text}
      </label>
      <span className="meta">{todo.createdAt}</span>
      <button 
        className="btn btn-danger delete-btn" 
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

export default TodoItem;