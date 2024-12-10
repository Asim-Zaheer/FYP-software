import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-4 text-sm">
      <span className="text-gray-500">Records: 1-07 of 70</span>
      <div className="flex items-center gap-2">
        <button className="text-gray-500 p-2 rounded-md hover:bg-gray-100">
          <FaChevronLeft />
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-2 py-1 rounded-md ${
                page === 1 ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="text-gray-500 p-2 rounded-md hover:bg-gray-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
