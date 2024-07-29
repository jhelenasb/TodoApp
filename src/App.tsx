import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// Simplified App Component
const App: React.FC = () => {
  // Load todos from localStorage or default to empty array
  const [todos, setTodos] = useState<string[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentTodo, setCurrentTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddOrUpdateTodo = () => {
    if (!currentTodo.trim()) return;

    setTodos(prevTodos =>
      editIndex !== null
        ? prevTodos.map((todo, index) => (index === editIndex ? currentTodo : todo))
        : [...prevTodos, currentTodo]
    );

    setCurrentTodo('');
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    setCurrentTodo(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <>
      <TodoInput
        value={currentTodo}
        onChange={setCurrentTodo}
        onSubmit={handleAddOrUpdateTodo}
      />
      <TodoList
        todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
