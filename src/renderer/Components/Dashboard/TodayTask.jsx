import React from 'react';

const TodayTasks = () => {
  const tasks = [
    { title: 'Take 1 dose of insulin as prescribed', time: '9:00 am', status: 'Completed' },
    { title: 'Check blood sugar 2 hours after lunch', time: '12:00 pm', status: 'Pending' },
    { title: 'Eat boiled egg and toast', time: '8:00 am', status: 'Incomplete' },
  ];

  const getStatusColor = (status) => {
    if (status === 'Completed') return 'text-green-500';
    if (status === 'Pending') return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Today Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.time}</p>
          </div>
          <span className={`text-sm font-bold ${getStatusColor(task.status)}`}>{task.status}</span>
        </div>
      ))}
    </div>
  );
};

export default TodayTasks;
