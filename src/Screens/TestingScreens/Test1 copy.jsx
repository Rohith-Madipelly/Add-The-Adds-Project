
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import { getTemplatesAPI } from '../../utils/APIcall';



export default function App() {

    const [Data, setData] = useState("No Data Found")
    const token = useSelector((state) => state.token);
    const APICaller = async () => {
        console.log("sdad")
        try {
            const res = await getTemplatesAPI(token)
            console.log(res.data.Data)
            setData(res.data.Data)
            console.log("klbxvj")
        } catch (e) {
            console.log("vdvsd",e)
        } finally {
            console.log("Finally")
        }
    }

    useEffect(() => {
        APICaller()
    }, [])
    return (
        <>
            <div>
                <div className='h-[70px]'>
                </div>
                <div className='w-[100vw] h-[100vh] max-h-auto'>
                    <div className='my-5 font-bold text-xl text-center'>Services</div>
                    <div className=' mx-10 px-10 '>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                            //   onSwiper={setSwiperRef}
                              slidesPerView={3}
                              // modules={[Virtual, Navigation, Pagination]}
                            // pagination={{
                            //     type: 'fraction',
                            // }}
                            navigation={true}
                            virtual
                            modules={[Autoplay]}
                            className="w-full h-full"
                        >
                            {slides.map((item) => (
                                <SwiperSlide key={item._id} className="w-full h-full z-0">
                                    <img src='/images/Home/Advertisting.png' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>



        </>
    );
}
