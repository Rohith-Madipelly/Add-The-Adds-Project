import  React, { useState } from "react";

export const YouTubeModal = ({ isOpen, onClose, onSubmit }) => {
    const [youtubeUrl, setYoutubeUrl] = useState('');
  
    const handleInputChange = (event) => {
      setYoutubeUrl(event.target.value);
    };
  
    const handleSubmit = () => {
      try{
    
        // const match = youtubeUrl.match(/src="([^"]+)"/);
        // if (match) {
        //     const srcValue = match[1];
        //     // setSrc(srcValue);
        //     onSubmit(srcValue);
        // } else {
        //     setSrc('src attribute not found');
        // }
        const url = youtubeUrl;
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (match && match[1]) {
          console.log(match[1])
          onSubmit(match[1]);

        } else {
          onSubmit(''); 
        }

        // onSubmit(youtubeUrl);
        setYoutubeUrl('');
      }catch(e){
        console.log(e)
      }
    
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
          <h2 className="text-2xl font-semibold mb-4">Enter YouTube Video URL</h2>
          <p className="text-gray-700 mb-4">Please provide the YouTube URL:</p>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            type="text"
            value={youtubeUrl}
            onChange={handleInputChange}
            placeholder="Enter YouTube url..."
          />
          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={handleSubmit}
            >
              OK
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
  