import React, { useEffect, useRef, useState } from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
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
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { ShareModel } from '../utils/ShareModel';
import CustomButton from '../Components/UI/Button/CustomButton';
import share from '../../public/images/share.png'
import AdvertisingComponents from '../Components/Funca/AdvertisingComponents';


function OwnStatus() {
    const isAdmin = useSelector((state) => state.isAdmin);
    const [Data, setData] = useState([])
    const token = useSelector((state) => state.token);
    console.log("token", token);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const dispatch = useDispatch();
    const location = useLocation();
    const [imageData, setImageData] = useState([])
    const [currentURl, setCurrentURl] = useState('https://addtheadd.com/Own%20Status');

    const [isShareModelOpen, setIsShareModelOpen] = useState(false);
    const [shareimg,setShareimg]=useState('')

    const openShareModel = (image) => {
      setIsShareModelOpen(true);
      setShareimg(`https://admin.addtheadd.com${image}`)
    };
  
    const closeShareModel = () => {
      setIsShareModelOpen(false);
    };

    const handleShare = (link, platform) => {
        if (platform === "whatsapp") {
          const linkMessage = "Vist My Page";
          const image = shareimg;
    
          // Encode message, image URL, and link
          const encodedMessage = encodeURIComponent(linkMessage);
          const encodedImage = encodeURIComponent(image);
          const encodedLink = encodeURIComponent(link);
    
          // Compose the message with link, additional text, and image
  const message = `${encodedMessage}%0A%0AUser Page: ${encodedLink}%0A%0AImage: ${encodedImage}`;    
          // Open WhatsApp with the composed message
          window.open(`https://api.whatsapp.com/send?text=${message}`);
        }
    
        else if (platform === "instagram") {
          const linkMessage = "Use Template";
          const image = shareimg;
          const link = "https://addtheadd.com/Own%20Status"; // Replace this with your actual link
    
          // Compose the caption with link, additional text, and image
          const caption = `${linkMessage}%0A%0AWebsite: Your additional text here.%0A%0AUser Page: ${link}`;
    
          // Construct the Instagram post URL
          const instagramPostUrl = `instagram://library?AssetPath=${image}&Caption=${caption}`;
    
          // Open Instagram with the pre-filled caption
          window.open(instagramPostUrl);
        }
    
        // Implement logic to share the link through various platforms
        console.log('Sharing link:', link);
        // You can use libraries like react-share to implement sharing functionalities
        // Example: share on WhatsApp
        // window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`);
      };




    // Check if there's a state with a message
    if (location.state && location.state.message) {
        // Show toaster notification with the message
        showToastMessage_warn(location.state.message);
    }

    const getImage = async () => {
        try {
            const response = await axios.get('https://admin.addtheadd.com/allcanvas');
            const data = response.data;
            setImageData(data.data.reverse())
            setLoading(false)
            console.log(imageData);
        } catch (error) {
            console.log("canvaImage", error);
        }
    }

    useEffect(() => {
        getImage()
    }, [])
    const deleteApi = async (id) => {
        console.log("token", token);

        try {
            const response = await axios.get(`https://admin.addtheadd.com/user/deletecanva/${id}`,
                {
                    // headers:{Authorization: "Bearer" + token}
                    headers: { Authorization: `Bearer ${token}` }
                });
            const data = response.data;
            toast.success(data.message)
        } catch (error) {
            console.log(error);
            if (error.response) {
              if (error.response.status === 401) {
             
              } else if (error.response.status === 404) {
                showToastMessage_warn('User Not Found')
                dispatch(setToken(""));
                // dispatch(setToken(""));
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
              } else if (error.response.status === 500) {
                // toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })
                showToastMessage_warn('Internal server error')
                dispatch(setToken(""));
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
              } else {
                showToastMessage_warn('An error occurred during .')
              }
            } else if (error.request) {
              showToastMessage_warn('No response received from the server.')
           
            } else {
              showToastMessage_warn('Error setting up the request.')
            }
          }
    }
    const handleDelete = (id) => {
        deleteApi(id)
        const filterdata = imageData.filter((each) => {
            const { _id } = each
            if (id !== _id) {
                return each
            }
        })
        setImageData(filterdata)

    }

    if (loading) {
        return <Loading />
    }
    else {



        return (
            <div className='w-full'>
                <ToastContainer />
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
                    <div className='w-full h-[280px] sm:h-[250px] mt-5 '>

                        {imageData ? <Swiper

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
                                el: '.custom-pagination'
                            }}
                            className="w-full h-68 pb-4"
                            modules={[Navigation, Pagination]}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
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
                            {imageData.map((eachObject) => {
                                // console.log("each",eachObject);
                                const { _id, image } = eachObject
                                return (
                                    <SwiperSlide key={_id} className="z-40 h-full
                             sm:flex sm:items-center sm:justify-center ">
                                        <Link to={`/EditPage/${_id}`}>
                                            {/* <Link to={{ pathname: '/Edit Own Page' }} state={{ slideContent }}> */}
                                            {/* {console.log("Data ",slideContent)} */}
                                            <img src={`https://admin.addtheadd.com${image}`}
                                                className='  w-[100%]  sm:h-[290px]  p-0 object-contain sm-mr-5vw' />
                                            {/* </Link> */}
                                        </Link>
                                        <button classStyle={'my-3 bg-white h-auto'} className='p-1 rounded '
                                         onClick={() => { openShareModel(image) }}><img src={share} alt='share'/></button>

                                        {isAdmin.toString()==="true"?<div className='flex justify-center'>
                                            <button onClick={() => { handleDelete(_id) }}
                                                className='bg-[#1E429F] items-center text-[white] p-1  rounded mb-8'>Delete</button></div>:""}
                                    </SwiperSlide>


                                )

                            })

                            }
                        </Swiper> : ""}


                        <ShareModel isOpen={isShareModelOpen} onClose={closeShareModel} onSubmit={handleShare} linkData={currentURl} />

                    </div>

                    <div className='h-[100px] mb-8 '>

                    </div>
                   
                    
                </div>
                <div>
        <AdvertisingComponents />

      </div>

            </div>
        )
    }

}

export default OwnStatus