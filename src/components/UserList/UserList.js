// src/components/UserList.js

import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const showUserDetails = user => {
    setSelectedUser(user);
  };

  const goBackToList = () => {
    setSelectedUser(null);
  };

  return (
    <div className="user-container">
      {selectedUser ? (
        <div id="user-details">
          <button onClick={goBackToList}>Назад к списку</button>
          <div id="user-info">
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Телефон: {selectedUser.phone}</p>
            <p>Вебсайт: {selectedUser.website}</p>
          </div>
        </div>
      ) : (
        <>
          <h1>Список пользователей</h1>
          <ul id="user-list">
            {users.map(user => (
              <li key={user.id} onClick={() => showUserDetails(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserList;
