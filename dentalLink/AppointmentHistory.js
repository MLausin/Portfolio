import React from 'react';

const appointments = [
  { id: 1, service: "Dental Brace", date: "10/10/2025" },
  { id: 2, service: "Dental Brace", date: "10/09/2025" },
  { id: 3, service: "Dental Brace", date: "10/08/2025" },
];

function AppointmentHistory({ onViewReview }) {
  return (
    <div>
      <h2>Appointment History</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => (
            <tr key={appt.id}>
              <td>{appt.service}</td>
              <td>{appt.date}</td>
              <td><button onClick={onViewReview}>→</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentHistory;
