import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdvertisingComponents() {
    const [showImage, setShowImage] = useState(true);

    const handleClose = () => {
        setShowImage(false);
            setTimeout(() => {
                setShowImage(true);
              }, 5000);
    };

    return (
        // <Link to={`/addPage}`} className='w-[100%] '>
        <div className='mx-3'>
            {showImage ?<div className='w-[100%] h-[270px] sm:h-[100px] relative'>
                {/* <img src='/images/Home/Advertisting.png' className='w-full h-[100%]' /> */}


                {showImage ?
                    <img src='/images/Home/Advertisting.png'  alt="Image" style={{  objectFit: 'cover' }} className='w-[100%] h-[12vw] sm:w-[100%]' />
                    : <div><div style={{ width: '100%', height: '100%' }} className=' bg-white '></div></div>}
                {showImage && (
                    <button
                        onClick={handleClose}
                        style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', zIndex: '10', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '70%' }}
                    className='w-[1.5rem] h-[1.5rem] sm:w-[0.8rem] sm:h-[0.8rem] sm:text-[0.4rem] text-[1rem]'
                    >
                       x
                    </button>
                )}
            </div>:""}
        </div>
        // </Link>
    )
}

export default AdvertisingComponents

