import React from 'react';
import Profile from './components/Profile/Profile';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Profile />
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
