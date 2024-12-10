import React from 'react';
import Sidebar from '../Components/SideBar';
import ProfileCard from '../Components/Profile/ProfileCard';
import DiabeticDescription from '../Components/Profile/Description';
import RecentReports from '../Components/Profile/RecentReport';

const ProfilePage = () => {
  return (
    <div className="flex h-screen">
  
      <Sidebar />

   
      <div className="flex-1 bg-gray-100 p-6 overflow-y-scroll">
      <h1 className="text-3xl font-bold mb-3">Patient Profile</h1>


        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-6">
              <ProfileCard />
            </div>
           
          </div>

          {/* Diabetic Description and Recent Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DiabeticDescription />
            <RecentReports />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
