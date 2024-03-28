import React, { useState } from 'react';
import { Circles } from 'react-loader-spinner';

// Define Loader2 component
function Loader2() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <Circles
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}