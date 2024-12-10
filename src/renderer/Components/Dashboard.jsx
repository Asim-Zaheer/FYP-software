import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-lg font-bold">Blood Status</h2>
          <p className="text-xl text-purple-500">116/70</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-lg font-bold">Heart Rate</h2>
          <p className="text-xl text-purple-500">120 bpm</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-lg font-bold">Blood Count</h2>
          <p className="text-xl text-purple-500">80-90</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-lg font-bold">Glucose Level</h2>
          <p className="text-xl text-purple-500">230 ml</p>
        </div>
      </div>

      {/* Add other sections like "My Appointments", "Today Tasks", etc. */}
    </div>
  );
};

export default Dashboard;
