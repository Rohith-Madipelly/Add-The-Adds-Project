import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getTemplatesAPI } from '../../../utils/APIcall';
import { showToastMessage_error } from '../../../shared/Toaster';
function Premier_Add_Page() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [Data, setData] = useState([])




    const APICaller = async () => {
        try {
            const res = await getTemplatesAPI()
            setData(res.data.Data)
            // setLoading(false)
        } catch (error) {

            if (error.response) {
                if (error.response.status === 401) {

                    // showToastMessage_error(`${error.response.statusText} Please Login again`)

                    // if(error.response.statusText==="Unauthorized")
                    // {
                    //     dispatch(setToken("")); // Dispatch action to clear token
                    //     localStorage.removeItem('token');
                    // }

                    // navigate('/login');
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


            console.log("vdvsd", error)
        } finally {
            console.log("Finally 123")
        }
    }

    useEffect(() => {
        APICaller()
    }, [])








    return (
        // <Link to={`/screen`} className='w-[100%] '>
        <div className='px-[5em] sm:px-0 mdl:px-[2.5em] md:px-[1em] mt-[2em]'>
            <div>
                <div className='flex flex-col items-center justify-center  w-full h-full mx-auto '>
                    <h1>GET A PLAN BECOME A CUSTOMER</h1>
                    <div className='flex w-[644px] items-center justify-center '>

                    {/* <div className='bg-black flex w-[644px] items-center justify-center sm:w-[350px] md:h-auto md:w-[500px] content-center  my-5'> */}
    {Data ? (
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            className='w-full h-full items-center justify-center'
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1023: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }}
        >
            {Data.map((slideContent, index) => (
                <SwiperSlide key={slideContent} className="z-40 items-center justify-center h-full sm:flex sm:items-center sm:justify-center relative">
                    <Link to={{ pathname: '/Edit Own Page' }} state={{ slideContent }} className='px-5'>
                        <img onLoad={(e) => { e.target.closest('.swiper-slide').style.height = `${e.target.clientHeight}px`; }} src={slideContent.imageUrl} className='max-w-full h-auto flex justify-center px-10' />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    ) : ""}
</div>

                </div>
            </div>
        </div>
        // </Link>
    )
}

export default Premier_Add_Page