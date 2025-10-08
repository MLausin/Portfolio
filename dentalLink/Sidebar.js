import React from 'react';

function Sidebar({ onNavigate, onLogout }) {
  return (
    <div style={{ width: '60px', borderRight: '1px solid #ccc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={() => onNavigate('profile')}>👤</button>
      <button onClick={() => onNavigate('history')}>📅</button>
      <button onClick={onLogout} style={{ marginTop: 'auto', color: 'red' }}>🔓</button>
    </div>
  );
}

export default Sidebar;
