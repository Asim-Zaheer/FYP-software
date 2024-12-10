import React from 'react';

const Overview = () => {
  const items = [
    { title: 'Blood Status', value: '116/70', icon: '🩸' },
    { title: 'Heart Rate', value: '120 bpm', icon: '❤️' },
    { title: 'Blood Count', value: '80-90', icon: '🩺' },
    { title: 'Glucose Level', value: '230/ml', icon: '🍬' },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-sm p-4 rounded-md text-center"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-xl text-purple-500 font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
