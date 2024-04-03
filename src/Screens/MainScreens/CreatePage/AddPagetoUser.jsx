import React, { useState } from 'react';
import { AdduserspageAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';
import { showToastMessage_error, showToastMessage_success } from '../../../shared/Toaster';

export const AddPagetoUser = ({ isOpen, onClose, onSubmit }) => {
    const [UserName, setUserName] = useState('');
    const token = useSelector((state) => state.token);
    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };


    const handleSubmit = async () => {
        try {
            const res = await AdduserspageAPI(token, UserName)
            console.log(res.data.message)
            showToastMessage_success(res.data.message)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    showToastMessage_error(error.response.data.message)
                    // setPasswordApiErr("Incorrect Password")
                } else if (error.response.status === 400) {
                    showToastMessage_error(error.response.data.message)
                    // setEmailOrPhoneApiErr("Account does not exist with the provided email or phone number")
                } else if (error.response.status === 404) {
                    showToastMessage_error(error.response.data.message)
                    // setEmailOrPhoneApiErr("Account does not exist with the provided email or phone number")
                } else if (error.response.status === 500) {
                    console.log("Data Error Internal server error 500 ", error)
                    // showToastMessage_error("Internal server error 500")
                } else {
                    console.log("Error else ?? ")
                }
            } else if (error.request) {
                showToastMessage_error(`No response received from the server. ${error.message} . Please Try Again `)
            } else {
                showToastMessage_error('Error setting up the request.')
            }

        } finally {
            setIsLoading(false);
        }

        onSubmit(UserName);
        setUserName(null);
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

                <h2 className="text-2xl font-semibold mb-4">Add User Page</h2>
                <p className="text-gray-700 mb-4">Please provide User Name</p>
                <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                    type="text"
                    value={UserName}
                    onChange={handleInputChange}
                    placeholder="Enter User Name"
                />

                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        onClick={handleSubmit}
                        disabled={!UserName}
                    >
                        Upload
                    </button>
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
