import React from 'react';

const DiabeticDescription = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Diabetic Description</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-500 mb-1">Diabetic Type</label>
          <input
            type="text"
            placeholder="Enter diabetic type"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Diagnosis Date</label>
          <input
            type="text"
            placeholder="Enter diagnosis date"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Family History</label>
          <input
            type="text"
            placeholder="Enter family history"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">HbA1C Trends</label>
          <input
            type="text"
            placeholder="Enter HbA1C trends"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Glucose Monitoring Stats</label>
          <input
            type="text"
            placeholder="Enter glucose monitoring stats"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Insulin Dosage</label>
          <input
            type="text"
            placeholder="Enter insulin dosage"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-500 mb-1">Complications</label>
          <input
            type="text"
            placeholder="Enter complications"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DiabeticDescription;
