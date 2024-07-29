import React from 'react';

interface TodoCardProps {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ children, onEdit, onDelete }) => {
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={onEdit} aria-label="Edit todo">
            <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={onDelete} aria-label="Delete todo">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
