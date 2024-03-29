import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getTemplatesAPI } from '../../utils/APIcall';
import { useSelector } from 'react-redux';



export default function App() {

    const [Data, setData] = useState(false)
    const token = useSelector((state) => state.token);





    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
  


    const APICaller = async () => {
        console.log("sdad")
        try {
            const res = await getTemplatesAPI(token)
            console.log(res.data.Data)
            setData(res.data.Data)
            console.log("klbxvj")
        } catch (e) {
            console.log("vdvsd", e)
        } finally {
            console.log("Finally 123")
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
                    {Data?<Swiper
                            modules={[Virtual, Navigation, Pagination]}
                            // modules={[Autoplay]}
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            // pagination={{
                            //     type: 'fraction',
                            // }}
                            navigation={true}
                            virtual
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                              className="w-full h-full"
                        >
                            {Data.map((slideContent, index) => (
                                <SwiperSlide key={slideContent} virtualIndex={index}>

                                    <img src={slideContent.imageUrl} className='w-full h-[350px] sm:h-[204px] m-0 p-0 object-cover' />
                                </SwiperSlide>
                            ))}
                        </Swiper>:""}
                    </div>
                </div>
            </div>



        </>
    );
}
