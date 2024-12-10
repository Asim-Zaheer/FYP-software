import React from "react";
import Sidebar from "../Components/SideBar";
import ReportsTable from "../Components/Reports/Reports";
import SearchBar from "../Components/Reports/Search";
import Pagination from "../Components/Reports/Pagination";
const ReportsPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Patient Reports</h1>
          <SearchBar />
          <ReportsTable />
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
