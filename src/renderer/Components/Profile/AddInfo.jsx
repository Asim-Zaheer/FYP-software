import React from 'react';

const AdditionalInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Additional Info</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Weight" className="p-2 border rounded-md" />
        <input type="text" placeholder="Height" className="p-2 border rounded-md" />
        <input type="text" placeholder="Blood Group" className="p-2 border rounded-md" />
        <input type="text" placeholder="No of Reports" className="p-2 border rounded-md" />
        <input type="text" placeholder="Glucose Level" className="p-2 border rounded-md" />
        <input type="text" placeholder="Blood Pressure" className="p-2 border rounded-md" />
      </div>
    </div>
  );
};

export default AdditionalInfo;
