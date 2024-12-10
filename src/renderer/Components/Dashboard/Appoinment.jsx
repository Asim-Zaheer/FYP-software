import React from 'react';

const MyAppointments = () => {
  const appointments = [
    { name: 'Dr. William', specialization: 'Orthopedic Surgeon' },
    { name: 'Dr. Johan Fraz', specialization: 'Cardiologist', active: true },
    { name: 'Dr. Rachel John', specialization: 'Neurologist' },
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>
      <div className="grid grid-cols-1">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-md ${
              appointment.active ? 'bg-purple-100' : ''
            }`}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <h3 className="font-bold">{appointment.name}</h3>
              <p className="text-sm text-gray-500">{appointment.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
