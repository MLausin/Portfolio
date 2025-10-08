import React from 'react';
import profileImage from '../userprofile.png';

function UserProfile() {
  return (
    <div>
      <h2>Personal Information</h2>
      <img src={profileImage} alt="User" style={{ borderRadius: '50%', width: '100px' }} />
      <p><strong>First Name:</strong> Juana</p>
      <p><strong>Last Name:</strong> Cruz</p>
      <p><strong>Email:</strong> juanadelacruz@email.com</p>
      <p><strong>Phone:</strong> 0912345678</p>
      <p><strong>Age:</strong> 26</p>
    </div>
  );
}

export default UserProfile;
