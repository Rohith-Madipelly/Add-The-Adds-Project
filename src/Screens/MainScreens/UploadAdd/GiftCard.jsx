import React, { useState } from 'react';

export const GiftCard = ({ isOpen, onClose, onSubmit }) => {


  const handleSubmit = () => {
    onSubmit();

  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">Gift Ads</h2>
        <div className='my-5'>
          No gift Ads available right now

        </div>
        <div className="flex justify-end">
          {/* <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleSubmit}

          >
            Upload
          </button> */}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
