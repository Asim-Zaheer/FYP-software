import React from 'react';

const ProfileCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Profile Picture and Name */}
            <div className="flex flex-col items-center justify-center">
                <div className="w-52 h-52 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img
                        src="https://via.placeholder.com/150" // Replace with actual image URL
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-xl font-bold">Sarah William</h2>
            </div>

            {/* Center: Personal Details in Card */}
            <div className="col-span-1 bg-gray-50 shadow-inner rounded-lg p-4 grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            placeholder="sarah@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 mb-1">Gender</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            placeholder="Female"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Age</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            placeholder="29"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-500 mb-1">Street Address</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md bg-white"
                        placeholder="123 Main St."
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 mb-1">Contact No</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            placeholder="+1 123 456 7890"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Emergency Contact</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            placeholder="+1 987 654 3210"
                        />
                    </div>
                </div>
            </div>

            {/* Right: Additional Info Section */}
            <div className="col-span-1 bg-gray-50 shadow-inner rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4">Additional Info</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 mb-1">Weight</label>

                        <input
                            type="text"
                            placeholder="Weight"
                            className="p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Height</label>

                        <input
                            type="text"
                            placeholder="Height"
                            className="p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Blood Group</label>

                        <input
                            type="text"
                            placeholder="Blood Group"
                            className="p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">No of Reports</label>

                        <input
                            type="number"
                            placeholder="No of Reports"
                            className="p-2 border border-gray-300 rounded-md bg-white"

                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Glucose Level</label>

                        <input
                            type="text"
                            placeholder="Glucose Level"
                            className="p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Blood Pressure</label>

                        <input
                            type="text"
                            placeholder="Blood Pressure"
                            className="p-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
