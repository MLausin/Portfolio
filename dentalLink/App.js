import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import AppointmentHistory from './components/AppointmentHistory';
import AppointmentReview from './components/AppointmentReview';
import LogoutModal from './components/LogoutModal';

function App() {
  const [currentView, setCurrentView] = useState('profile'); // 'profile' | 'history' | 'review'
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(true);
  };

  const confirmLogout = () => {
    setShowLogout(false);
    alert("Logged out! (Add real logout logic here)");
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onNavigate={setCurrentView} onLogout={handleLogout} />
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        {currentView === 'profile' && <UserProfile />}
        {currentView === 'history' && <AppointmentHistory onViewReview={() => setCurrentView('review')} />}
        {currentView === 'review' && <AppointmentReview />}
      </div>

      {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onConfirm={confirmLogout} />}
    </div>
  );
}

export default App;
