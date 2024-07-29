import React from 'react';

interface TodoInputProps {
  value: string;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
    <header>
        <input
          placeholder="Enter todo..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Add</button>
    </header>
    </form>
  );
};

export default TodoInput;

