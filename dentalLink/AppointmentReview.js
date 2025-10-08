import React from 'react';

function AppointmentReview() {
  return (
    <div>
      <h2>Dental Brace</h2>
      <p><strong>Date:</strong> 10/10/2025</p>
      <h3>Dentist</h3>
      <img src="https://via.placeholder.com/100" alt="Dentist" style={{ borderRadius: '50%' }} />
      <p><strong>Dr. Miguel</strong></p>
      <textarea placeholder="Write review here..." rows={5} cols={40}></textarea>
    </div>
  );
}

export default AppointmentReview;
