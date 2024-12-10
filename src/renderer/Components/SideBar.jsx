import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Icon for logout
import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <AiOutlineDashboard />, route: '/' },
    { name: 'Reports', icon: <BsFileEarmarkText />, route: '/reports' },
    { name: 'Book Appointment', icon: <AiOutlineCalendar />, route: '/appointments' },
    { name: 'Profile', icon: <AiOutlineUser />, route: '/profile' },
  ];

  return (
    <div className="h-screen w-64 bg-[#8370FD] text-white flex flex-col">
      <div className="py-8 text-center font-bold text-xl">Patient Dashboard</div>
      <ul className="flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.route}
            className={({ isActive }) =>
              `flex items-center px-6 py-4 text-lg hover:bg-white hover:text-[#8370FD] ${
                isActive ? 'bg-white text-[#8370FD]' : ''
              }`
            }
          >
            <span className="mr-4 text-2xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </ul>
      <div className="px-6 py-4 mt-auto hover:bg-white hover:text-[#8370FD] cursor-pointer flex items-center">
        <FiLogOut className="mr-4 text-2xl" />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
