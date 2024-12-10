import React from 'react';
import { FaFolder } from 'react-icons/fa'; // Using react-icons for folder icon

const RecentReports = () => {
  const reports = [
    { title: 'Blood Test - CBC', time: '8:45 am' },
    { title: 'Blood Sugar Test', time: '8:45 am' },
    { title: 'Glucose Tolerance Test', time: '8:45 am' },
    { title: 'Insulin Antibody Test', time: '8:45 am' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-3">
      {/* Section Title */}
      <h3 className="text-lg font-bold text-black mb-4">Recent Reports</h3>

      {/* Reports List */}
      <ul className="space-y-4">
        {reports.map((report, index) => (
          <li
            key={index}
            className="bg-white flex justify-between items-center p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4">
              <FaFolder className="text-purple-500 text-xl" />
              <span className="text-gray-800 font-medium">{report.title}</span>
            </div>
            <span className="text-gray-500">{report.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentReports;
