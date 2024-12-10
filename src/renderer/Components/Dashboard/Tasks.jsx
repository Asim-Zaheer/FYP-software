import React from 'react';

const Tasks = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <div className="w-32 h-32 mx-auto">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="4"
          ></circle>
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#8370FD"
            strokeWidth="4"
            strokeDasharray="60 40"
          ></circle>
        </svg>
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between">
          <span>Task Completed</span>
          <span className="text-green-500">60%</span>
        </li>
        <li className="flex justify-between">
          <span>Task Incomplete</span>
          <span className="text-red-500">30%</span>
        </li>
        <li className="flex justify-between">
          <span>Task Pending</span>
          <span className="text-yellow-500">10%</span>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
