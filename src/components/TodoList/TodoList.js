// src/components/TodoList.js

import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Введите задание');
      return;
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = index => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = index => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const saveEditing = index => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="todo-container">
      <h1>Список дел</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Введите новое задание" 
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {editingIndex === index ? (
              <>
                <input 
                style={{width: '150px', height: '6px'}}
                  type="text" 
                  value={editingText} 
                  onChange={(e) => setEditingText(e.target.value)} 
                />
                <button onClick={() => saveEditing(index)}>Сохранить</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTask(index)}>{task.text}</span>
                <button onClick={() => startEditing(index)}>Редактировать</button>
                <button onClick={() => deleteTask(index)}>Удалить</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
