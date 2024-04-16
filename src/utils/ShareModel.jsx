import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const ShareModel = ({ isOpen, onClose, onSubmit, linkData }) => {
  const [shareLink, setShareLink] = useState(linkData);
  const [isCopied, setCopied] = useState(false);
  const handleInputChange = (event) => {
    const link = event.target.value;
    setShareLink(link);
  };

  const handleShare = (platform) => {
    onSubmit(shareLink, platform);
  };

  if (!isOpen) {
    return null;
  }

  const handleCopy=()=>{
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },2000)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">Share Link</h2>
        <div className="flex items-center mb-4">
          <input
            className="flex-1 mr-2"
            type="text"
            placeholder="Enter shareable link"
            value={shareLink}
            onChange={handleInputChange}
          />
          <CopyToClipboard text={shareLink}>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none" onClick={()=>{ handleCopy()}}>
            {isCopied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 
            text-white rounded 
            bg-blue-500
            hover:bg-blue-600 
        
            focus:outline-none"
            onClick={() => handleShare('whatsapp')}
            disabled={!shareLink}
          >
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Logo-WhatsApp.png" alt="WhatsApp" width={75} />
            {/* WhatsApp */}
          </button>
          {/* Buttons for other platforms */}
          <button
            className="px-4 py-2 ms-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
