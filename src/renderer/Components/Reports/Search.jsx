import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="flex items-center bg-white border border-gray-300 p-2 rounded-md w-full max-w-md shadow-sm">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
            </div>

        {/* Filter Button */}
        <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-md">
          <FaFilter className="mr-8" />
          Filter
        </button>

        {/* Add New Report Button */}
        <button
          onClick={toggleModal}
          className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-md"
        >
          + Add New Report
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-1/3 p-6">
            <h2 className="text-xl font-bold mb-4">New Report</h2>
            <form className="space-y-4">
              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Patient ID"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Doctor Consultant"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Disease"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
              <textarea
                placeholder="Description"
                className="p-2 border border-gray-300 rounded-md w-full h-20"
              ></textarea>
              <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                <p className="text-purple-500">
                  <span className="text-2xl">📂</span> Drag & Upload Files
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 rounded-md w-full"
              >
                + Add Report
              </button>
            </form>

            {/* Close Modal */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
