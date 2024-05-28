import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getaddAPI } from '../../utils/APIcall'

function AdvertisingComponents() {

    const [showImage, setShowImage] = useState(true);
    const [ImageUrl, setImageURl] = useState()
    const [LinkUrl, setLinkURl] = useState()
    const [initialValue, SetinitialValue] = useState(1)
    const [ADSData, setADSData] = useState([])
    const APICaller = async () => {
        // console.log("API start")
        try {
            const res = await getaddAPI()
            console.log(res.data.Data)
            setADSData(res.data.Data)
            setImageURl(res.data.Data[0].imageUrl);
            setLinkURl(res.data.Data[0].imagelink)
            console.log("1 ImageUrl", ImageUrl)
        } catch (e) {
            setImageURl('/images/Home/Advertisting.png');
        } finally {
            console.log("Finally")
        }
    }
    console.log()

    useEffect(() => {
        APICaller()
        // console.log("Page Started")
    }, [])
    const handleClose = () => {
        try{
            setShowImage(false);
            SetinitialValue((prevIndex) => (prevIndex + 1) % ADSData.length);
            setImageURl(ADSData[initialValue].imageUrl)
            setLinkURl(ADSData[initialValue].imageUrl)
            setTimeout(() => {
                setShowImage(true);
            }, 5000);
        }catch(e){
            console.log("No Image found In error")
        }
     
    };

    return (
        // <Link to={`/addPage}`} className='w-[100%] '>
        <div className='mx-3'>
            {/* {initialValue} */}
            {showImage ? <div className='w-[100%] h-[270px] sm:h-[100px] relative'>
                {/* <img src='/images/Home/Advertisting.png' className='w-full h-[100%]' /> */}


                {ImageUrl ? <>{showImage ?
                    <a href={LinkUrl} target='blank'><img src={ImageUrl} alt="Image" style={{ objectFit: 'cover' }} className='w-[100%] h-[12vw] sm:w-[100%]' /></a>
                    : <div><div style={{ width: '100%', height: '100%' }} className=' bg-white '></div></div>}</> : ""}

                {/* {showImage ?
                    <img src='/images/Home/Advertisting.png' alt="Image" style={{ objectFit: 'cover' }} className='w-[100%] h-[12vw] sm:w-[100%]' />
                    : <div><div style={{ width: '100%', height: '100%' }} className=' bg-white '></div></div>} */}
                {showImage && (
                    <button
                        onClick={handleClose}
                        style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', zIndex: '10', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '70%' }}
                        className='w-[1.5rem] h-[1.5rem] sm:w-[0.8rem] sm:h-[0.8rem] sm:text-[0.4rem] text-[1rem]'
                    >
                        x
                    </button>
                )}
            </div> : ""}
        </div>
        // </Link>
    )
}

export default AdvertisingComponents

