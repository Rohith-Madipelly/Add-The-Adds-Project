import React, { useState } from 'react';
import { PaymentResModal } from './PaymentResModal';
import { Route, useNavigate } from 'react-router-dom';

function PaymentScreens() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const navigate = useNavigate();
  const openModal = (title, text,route) => {
    setModalTitle(title);
    setModalText(text);
    setIsModalOpen(true);
    setRouteTo(route)
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className='h-[100px]'></div>
      
      <h1>Rohith Madipelly</h1>
      <button onClick={() => openModal('Payment Successful', 'Your payment has been processed successfully.','/')} className="btn-open-modal">
      Payment Successful
      </button>
      <button onClick={() => openModal('Payment Failed', 'Your payment has been processed Failed.','//Upload ads')} className="btn-open-modal">
      Payment Failed
      </button> 
      
      <PaymentResModal
        isOpen={isModalOpen}
        onClose={closeModal}
        classNames={{
          overlay: 'custom-overlay',
          modal: 'custom-modal',
          closeButton: 'custom-close-button',
          title: 'custom-title',
          content: 'custom-content',
        }}
        title={modalTitle}
      >
        <p>{modalText}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={()=>{navigate(`${routeTo}`);}}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </PaymentResModal>
    </div>
  );
}

export default PaymentScreens;
