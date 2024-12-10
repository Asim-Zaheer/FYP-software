import React from 'react';
import BloodPressureLevel from './Dashboard/BPlevel';
import Overview from './Dashboard/Overview';
import MyAppointments from './Dashboard/Appoinment';
import TodayTasks from './Dashboard/TodayTask';
import Tasks from './Dashboard/Tasks';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-y-scroll">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BloodPressureLevel />
        </div>
        <div className="lg:col-span-1">
          <Overview />
        </div>

        <div className="lg:col-span-4">
          <MyAppointments />
        </div>

        <div className="lg:col-span-2">
          <TodayTasks />
        </div>
        <div className="lg:col-span-1">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
