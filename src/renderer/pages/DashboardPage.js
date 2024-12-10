import React from 'react';
import Sidebar from '../Components/SideBar';
import Dashboard from "../Components/Dashboard"

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
