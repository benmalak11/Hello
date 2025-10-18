import React from 'react';

function Header({ incompleteCount }) {
  return (
    <header>
      <h1>To-Do List</h1>
      <p className="secondary-text">
        {incompleteCount} {incompleteCount === 1 ? 'item' : 'items'} left
      </p>
    </header>
  );
}

export default Header;