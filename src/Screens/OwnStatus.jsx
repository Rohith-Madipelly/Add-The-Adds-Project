import React, { useEffect, useRef, useState } from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { getTemplatesAPI } from '../utils/APIcall'
import { useSelector } from 'react-redux'




import './css/OwnStatus.css'
import { Button, Carousel } from 'flowbite-react'

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { showToastMessage_error, showToastMessage_warn } from '../shared/Toaster';
import CopyToClipBoard from '../utils/CopyToClipBoard';
import Loading from '../utils/Loadings/Loading';
import { setToken } from '../redux/actions/loginAction';
import { useDispatch} from 'react-redux';
import axios from 'axios';

function OwnStatus() {
    const [Data, setData] = useState([])
    const token = useSelector((state) => state.token);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const dispatch = useDispatch();
    const location = useLocation();
    const [imageData,setImageData]=useState([])

    // Check if there's a state with a message
    if (location.state && location.state.message) {
        // Show toaster notification with the message
        showToastMessage_warn(location.state.message);
    }
    const APICaller = async () => {
        try {
            const res = await getTemplatesAPI(token)
            setData(res.data.Data)
            setLoading(false)
        } catch (error) {

            if (error.response) {
                if (error.response.status === 401) {

                    showToastMessage_error(`${error.response.statusText} Please Login again`)

                    if(error.response.statusText==="Unauthorized")
                    {
                        dispatch(setToken("")); // Dispatch action to clear token
                        localStorage.removeItem('token');
                    }

                    navigate('/login');
                } else if (error.response.status === 404) {
                    //   setEmailOrPhoneApiErr("Account does not exist with the provided email or phone number")
                } else if (error.response.status === 500) {
                    //   console.log("Data Error Internal server error 500 ", error)
                    showToastMessage_error("Internal server error 500")
                } else {
                    console.log("Error else ?? ")
                }
            } else if (error.request) {
                showToastMessage_error(`No response received from the server. ${error.message} . Please Try Again `)
            } else {
                showToastMessage_error('Error setting up the request.')
            }


            console.log("vdvsd", e)
        } finally {
            console.log("Finally 123")
        }
    }

    useEffect(() => {
        APICaller()
    }, [])
    const getImage = async () => {
        try {
          const response = await axios.get('https://admin.addtheadd.com/allcanvas');
          const data = response.data;
          setImageData(data.data)
          console.log(imageData); 
        } catch (error) {
          console.log("canvaImage", error);
        }
    }
      
useEffect(()=>{
getImage()
},[])

    if (loading) {
        return <Loading/>
    }
    else{

 

    return (
        <div className='w-full'>
            <div className='h-[70px]'>

            </div>
            <div className='OwnStatusImageBackgound  pt-5 px-[100px] sm:px-5 '>
                <div className='flex '>
                    <div className='w-[35%]'>
                        <Button className='my-4 bg-blue-800' as={Link} to={'/EditPage'}>Own Status</Button>
                        {/* <Button className='my-4 bg-blue-800'>Ready for themes</Button> */}
                    </div>

                    <div className='mx-5  w-[65%] '>
                        <div className='flex gap-5'>
                            <Link to={'/Create Page'}><Button className='my-4 bg-white text-black  shadow-xl hover:bg-white' >My Page</Button></Link>
                            {/* <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white' onClick={()=>{CopyToClipBoard("Hello Copy chasukunavaa","Text copied to clipboard!")}}>Share</Button> */}
                            {/* <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Add</Button> */}
                            <Link to={'/'}><Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Cancel</Button></Link>
                        </div>
                        {/* <div className='w-90  bg-white shadow-xl px-5 py-2 rounded-lg'>Search Here</div> */}
                    </div>
                </div>
                <div className='w-full h-[400px] sm:h-[250px] mt-5 mx-5'>

                    {Data ? <Swiper

                        // modules={[Autoplay]}
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={10}
                        // pagination={{
                        //     type: 'fraction',
                        // }}
                        navigation={true}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        className="w-full h-full"
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            390: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1023: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {Data.map((slideContent, index) => (
                            <SwiperSlide key={slideContent} className="z-40 h-full sm:flex sm:items-center sm:justify-center ">
                                <Link to={{ pathname: '/Edit Own Page' }} state={{ slideContent }}>
                                    {/* {console.log("Data ",slideContent)} */}
                                    <img src={slideContent.imageUrl} className='w-full h-[364px] w-[327px] sm:h-[204px] m-0 p-0 object-cover' />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper> : ""}

                    { imageData.map((eachObject)=>{
                        console.log("each",eachObject);
                        const{_id,image}=eachObject
                        return(
                            <SwiperSlide key={_id} className="z-40 h-full sm:flex sm:items-center sm:justify-center ">
                                <Link to={`/EditPage/${_id}`}>
                                {/* <Link to={{ pathname: '/Edit Own Page' }} state={{ slideContent }}> */}
                                    {/* {console.log("Data ",slideContent)} */}
                                    <img src={`https://admin.addtheadd.com${image}`} className='w-full h-[364px] w-[327px] sm:h-[204px] m-0 p-0 object-cover' />
                                {/* </Link> */}
                                </Link>
                            </SwiperSlide>
                        )
                        
                    })

                    }

                </div>




                <div className='h-[100px]'>

                </div>
            </div>

        </div>
    )   }

}

export default OwnStatus