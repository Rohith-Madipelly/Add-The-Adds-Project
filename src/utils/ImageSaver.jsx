import React from 'react';

const ImageSaver = ({ imageUrl, fileName }) => {
  const saveImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <div>
      {/* <img src={imageUrl} alt="My Image" /> */}
      <button onClick={saveImage}>Save Image 123</button>
    </div>
  );
};

export default ImageSaver;
