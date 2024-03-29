import React from 'react';
import myImage from '/images/AuthBanner/AuthBanner.jpeg'; // Import your image file

class ImageComponent extends React.Component {
  saveImage = () => {
    const link = document.createElement('a');
    link.href = myImage; // Set the href to the image source
    link.download = 'myImage.jpg'; // Set the download attribute to specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div>
        <img src={myImage} alt="My Image" />
        <button onClick={this.saveImage}>Save Image</button>
      </div>
    );
  }
}

export default ImageComponent;
