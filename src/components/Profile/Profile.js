import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="avatar">
        <img src="https://i.pinimg.com/736x/32/3b/c2/323bc2e28f35a760b8d7afe48f3ffe48.jpg" alt="Аватар пользователя" />
      </div>
      <div className="user-info">
        <h1>Имя пользователя</h1>
        <p>Краткая информация о пользователе (биография).</p>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Телефон: +1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
