import React, { useState, useEffect } from 'react';

const ScreenSizeDisplayer = ({ screens }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const findScreenSize = () => {
      for (const size in screens) {
        const { min, max } = screens[size];
        if (min && max) {
          if (windowWidth >= parseInt(min) && windowWidth <= parseInt(max)) {
            setScreenSize(size);
            return;
          }
        } else if (min && !max) {
          if (windowWidth >= parseInt(min)) {
            setScreenSize(size);
            return;
          }
        }
      }
    };

    findScreenSize();
  }, [windowWidth, screens]);

  return (
    <div className=''>
      <p>Width: {windowWidth}px</p>
      <p>Screen Size: {screenSize}</p>
    </div>
  );
};

const ScreenSizeDisplayer123 = () => {
  const screens = {
    sm: { min: "320", max: "480" },
    md: { min: "481", max: "768" },
    mdl: { min: "769", max: "1023" },
    lg: { min: "1024", max: "1280" },
    xl: { min: "1281", max: "1535" },
    "2xl": { min: "1536" },
  };

  return <ScreenSizeDisplayer screens={screens} />;
};

export default ScreenSizeDisplayer123;
