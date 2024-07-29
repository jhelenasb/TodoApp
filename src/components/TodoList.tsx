import React from 'react';
import TodoCard from './TodoCard';

interface TodoListProps {
  todos: string[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => (
    <ul className='main'>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        >
          {todo}
        </TodoCard>
      ))}
    </ul>
  );
  
export default TodoList;