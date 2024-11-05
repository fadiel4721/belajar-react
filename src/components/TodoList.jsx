import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TodoList.module.css'; // Import CSS module

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');
  const navigate = useNavigate();

  const addTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const editTodoHandler = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
  };

  const updateTodo = () => {
    if (editTodo.trim() === '') return; // Prevent updating to empty todo
    const updatedTodos = todos.map((todo, index) => (index === editIndex ? editTodo : todo));
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const markAsDone = (index) => {
    const todoToDelete = todos[index];
    // Display an alert when the task is marked as done
    alert(`${todoToDelete} has been completed!`);
    deleteTodo(index); // Remove the task from the list
  };

  const handleNext = () => {
    // Navigasi ke halaman Shopping Cart
    navigate('/shopping-cart');
  };

  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className={styles.addButton} onClick={addTodo}>Add</button>
      </div>

      {editIndex !== null && (
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Edit Todo"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button className={styles.updateButton} onClick={updateTodo}>Update</button>
        </div>
      )}

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            {todo}
            <div>
              <button className={styles.editButton} onClick={() => editTodoHandler(index)}>Edit</button>
              <button className={styles.deleteButton} onClick={() => deleteTodo(index)}>Delete</button>
              <button className={styles.completeButton} onClick={() => markAsDone(index)}>Complete</button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.nextButton} onClick={handleNext}>Next</button>
    </div>
  );
}

export default TodoList;
