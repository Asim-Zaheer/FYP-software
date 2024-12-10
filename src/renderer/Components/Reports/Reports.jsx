import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ReportsTable = () => {
  const reports = [
    { no: '01', date: '19-11-2024', title: 'Blood Test-CBC', type: 'Lab Test', status: 'Reviewed' },
    { no: '02', date: '18-11-2024', title: 'Chest X-Ray', type: 'Imaging', status: 'Pending' },
    { no: '03', date: '17-11-2024', title: 'ECG Report', type: 'Cardiology', status: 'Reviewed' },
    { no: '04', date: '16-11-2024', title: 'MRI-Scan- Spine', type: 'Imaging', status: 'Pending' },
    { no: '05', date: '15-11-2024', title: 'Blood Sugar Test', type: 'Lab Test', status: 'Reviewed' },
    { no: '06', date: '11-11-2024', title: 'Glucose Tolerance Test', type: 'Lab Test', status: 'Reviewed' },
    { no: '07', date: '13-11-2024', title: 'Kidney Function Test', type: 'Lab Test', status: 'Pending' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Title */}
      <h3 className="text-lg font-bold mb-6">Reports List</h3>

      {/* Table */}
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-3">No</th>
            <th className="py-3">Date</th>
            <th className="py-3">Report Title</th>
            <th className="py-3">Report Type</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-4">{report.no}</td>
              <td className="py-4">{report.date}</td>
              <td className="py-4">{report.title}</td>
              <td className="py-4">{report.type}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    report.status === 'Reviewed'
                      ? 'bg-green-100 text-green-500'
                      : 'bg-red-100 text-red-500'
                  }`}
                >
                  {report.status}
                </span>
              </td>
              <td className="py-4">
                <button className="text-purple-500">
                  <FaDownload />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
