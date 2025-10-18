import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form className="add-row" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Add new task"
      />
      <button type="submit" className="btn btn-primary" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;