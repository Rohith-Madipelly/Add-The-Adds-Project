import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { showToastMessage_success } from '../../../shared/Toaster';
import { DeleteHeadersAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';

export const DeleteHeadersModel = ({ datares, isOpen, onClose, onSubmit }) => {

    const handleSubmit = () => {
    };


    const token = useSelector((state) => state.token);

    const handleDelete = async (ID) => {
        console.log("Delete Method ")

        try {
            const res = await DeleteHeadersAPI(token, ID)
            console.log(res.data)
            showToastMessage_success(res.data.message)
            onSubmit()

        }
        catch (e) {
            console.log("Error in Delete Header API ", e)
        }
        finally {

        }
    }
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>
                    &times;
                </span>
                <h2 className="text-2xl font-semibold mb-4">Image and Video Headers</h2>

                {datares.length === 0 ? (
                    <div className='flex justify-center my-3'>No content found</div>
                ) : (
                    datares.map((dataMap) => (
                        <div key={dataMap._id} className='flex justify-between py-2 mb-1 hover:bg-slate-500'>
                            <span>{dataMap._id}</span>
                            <MdDelete size={25} color='red' onClick={() => { handleDelete(dataMap._id) }} />
                        </div>
                    ))
                )}


                <div className="flex justify-end">
                    {/* <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        
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
