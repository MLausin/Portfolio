import React from 'react';

function LogoutModal({ onClose, onConfirm }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3>Logout</h3>
        <p>Are you sure you want to logout?</p>
        <button onClick={onClose}>No</button>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
}

export default LogoutModal;
