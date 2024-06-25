import React, { useState, useEffect } from 'react';
import { showToastMessage_warn } from '../../shared/Toaster';

const ShareButton = () => {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // Update shareUrl state with current URL when component mounts
    const currentUrl = window.location.href;

    setShareUrl(currentUrl);
  }, []);

  const copyToClipboard = (text) => {
    // Copy URL to clipboard
    navigator.clipboard.writeText(text)
      .then(() => alert('URL copied to clipboard'))
      .catch(err => console.error('Could not copy URL: ', err));
  };

  return (
    <div className='new_Page_GroundImage'>
         <div className='h-[70px] HomeBackGroundImage'>
         </div>
      <p>Share this URL:</p>
      <p>Share this URL:</p>
      <p>Share this URL:</p>
      <p>Share this URL:</p>
      <p>Share this URL:</p>
      <p>Share this URL:</p>
      <input type="text" value={shareUrl} readOnly />
      <button onClick={() => copyToClipboard(shareUrl)}>Copy URL</button>

      <div>
      <button onClick={() => showToastMessage_warn("No data found, you can add here")}>send toaster</button>
        
      </div>
    </div>
  );
};

export default ShareButton;
