import React, { useState } from 'react';

const BloodPressureLevel = () => {
  const [activeTab, setActiveTab] = useState('BP');

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      {/* Tabs for BP, Heart, and Glucose Level */}
      <div className="flex justify-start items-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab('BP')}
          className={`px-4 py-2 rounded-full ${
            activeTab === 'BP'
              ? 'bg-purple-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          BP
        </button>
        <button
          onClick={() => setActiveTab('Heart')}
          className={`px-4 py-2 rounded-full ${
            activeTab === 'Heart'
              ? 'bg-purple-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          Heart
        </button>
        <button
          onClick={() => setActiveTab('Glucose')}
          className={`px-4 py-2 rounded-full ${
            activeTab === 'Glucose'
              ? 'bg-purple-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          Glucose Level
        </button>
      </div>

      {/* Content Based on Active Tab */}
      {activeTab === 'BP' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Box for Blood Pressure Level */}
          <div className="col-span-2 bg-purple-50 p-6 rounded-md flex flex-col items-center justify-center shadow-sm">
            <p className="text-3xl font-bold text-purple-500">120/80</p>
            <span className="text-sm text-gray-500 mt-2">
              High Blood Pressure
            </span>
         
          </div>

          {/* Weight Box */}
          <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
            <p className="font-semibold">Weight</p>
            <p className="text-lg font-bold">72 Kg</p>
          </div>

          {/* Height Box */}
          <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
            <p className="font-semibold">Height</p>
            <p className="text-lg font-bold">170 cm</p>
          </div>
        </div>
      )}

      {activeTab === 'Heart' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {/* Main Box for Blood Pressure Level */}
           <div className="col-span-2 bg-purple-50 p-6 rounded-md flex flex-col items-center justify-center shadow-sm">
             <p className="text-3xl font-bold text-purple-500">120/80</p>
             <span className="text-sm text-gray-500 mt-2">
             Heart
             </span>
          
           </div>
 
           {/* Weight Box */}
           <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
             <p className="font-semibold">Weight</p>
             <p className="text-lg font-bold">72 Kg</p>
           </div>
 
           {/* Height Box */}
           <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
             <p className="font-semibold">Height</p>
             <p className="text-lg font-bold">170 cm</p>
           </div>
         </div>
        
      )}

      {activeTab === 'Glucose' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Main Box for Blood Pressure Level */}
             <div className="col-span-2 bg-purple-50 p-6 rounded-md flex flex-col items-center justify-center shadow-sm">
               <p className="text-3xl font-bold text-purple-500">120/80</p>
               <span className="text-sm text-gray-500 mt-2">
               Glucose
               </span>
            
             </div>
   
             {/* Weight Box */}
             <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
               <p className="font-semibold">Weight</p>
               <p className="text-lg font-bold">72 Kg</p>
             </div>
   
             {/* Height Box */}
             <div className="bg-purple-100 text-purple-500 p-4 rounded-md shadow-sm text-center">
               <p className="font-semibold">Height</p>
               <p className="text-lg font-bold">170 cm</p>
             </div>
           </div>
      )}
    </div>
  );
};

export default BloodPressureLevel;
