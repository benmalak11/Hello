import React from 'react';
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet — add your first to-do!</p>
      </div>
    );
  }

  return (
    <div className="card" role="list">
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition key={todo.id} timeout={220} classNames="animation">
            <TodoItem 
              todo={todo} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TodoList;