import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getAddsAPI } from '../../../utils/APIcall';
import { showToastMessage_error } from '../../../shared/Toaster';
function Premier_Add_Page() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [Data, setData] = useState([])
    const [checker, setChecker] = useState(false)
    const navigate = useNavigate();



    const APICaller = async () => {
        try {
            const res = await getAddsAPI()
            console.log("Hello Hero", res.data);
            
            if(res.data){
                setChecker(true)
                console.log("cdmhbcj",checker)
            }
            setData(res.data.Data);

            // setData(res.data.Data)
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
        <div className='mt-5'>
            <div>
                <div className='flex flex-col items-center justify-center  w-full h-full mx-auto '>
                    <h1 onClick={()=>{navigate('/Upload Ads');}}>GET A PLAN BECOME A CUSTOMER</h1>


                    <div className='flex w-[644px] items-center justify-center sm:w-[350px] '>
                        {checker?(<Swiper
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
                                className='w-full h-full flex items-center justify-center '
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
                             
                    <div className='flex w-[644px] items-center justify-center sm:w-[350px] '>
                        {Data.length === 0? (
                            <div className='justify-center h-full '>
                                <div class="flex justify-center items-center h-[80%] w-[70%] bg-black text-white mx-auto">
                                    <p>No Data Uploaded</p>
                                </div>
                            </div>) : (
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
                                className='w-full h-full flex items-center justify-center '
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
                                <div className='bg-white h-full w-full flex justify-center'>

                                    {Data.map((slideContent, index) => (
                                        <SwiperSlide key={slideContent} className="z-40 ">
                                            <Link to={{ pathname: `/Add Page/${slideContent.userPage}` }}>
                                                {/* <img onLoad={(e) => { e.target.closest('.swiper-slide').style.height = `${e.target.clientHeight}px`; }} src={slideContent.imageUrl} className='max-w-full h-auto flex justify-center px-10' /> */}
                                                <div key={index} className='d-flex justify-center item-center'>
                                             
                                                    {!slideContent.status ? (
                                                        <iframe
                                                            className='w-full h-full px-10 iframeResponsevi'
                                                            style={{ height: 400 }}
                                                            // src={data.headLink}
                                                            src={`https://www.youtube.com/embed/${slideContent.recentHeader}`}
                                                            // src={`https://www.youtube.com/embed/${slideContent.headLink}`}
                                                            title="YouTube video player"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerpolicy="strict-origin-when-cross-origin"
                                                            allowfullscreen
                                                        ></iframe>
                                                    ) : (
                                                        <div>
                                                         
                                                            <img src={`https://admin.addtheadd.com${slideContent.recentHeader}`} className='max-w-full h-auto flex justify-center px-10 ' />
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}


                                </div>
                            </Swiper>)
                        }

                    </div>
                            </Swiper>)
                        :<div className='justify-center h-full w-full'>
                        <div class="flex justify-center items-center h-[80%] w-[70%] bg-black text-white mx-auto">
                            <p>No Data Uploaded</p>
                        </div>
                    </div>}

                    </div>

                </div>
            </div>
        </div>
        // </Link>
    )
}

export default Premier_Add_Page