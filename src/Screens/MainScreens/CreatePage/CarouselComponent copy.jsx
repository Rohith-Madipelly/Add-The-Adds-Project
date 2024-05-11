import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI } from '../../../utils/APIcall';
import './Carousel.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CarouselComponent() {
    const token = useSelector((state) => state.token);
    const [Data, setData] = useState([])

    const Apicaller = async () => {
        console.log(token)
        try {
            const res = await ProfileAPI(token)
            setData(res.data.ownHeaders)
            console.log(res.data.ownHeaders)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        Apicaller()
    }, [])

    return (
        <div className="Carousel-wapper d-flex justify-center">
            <Carousel className='d-flex justify-center carousel-arrow '
                slideInterval={500000}
                pauseOnHover
                // slide={false}
                // onSlideChange={(index) => console.log('onSlideChange()', index)}
                style={{ color: 'black' }}
                leftControl={<FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black', fontSize: 30 }} />}
                rightControl={<FontAwesomeIcon icon={faChevronRight} style={{ color: 'black', fontSize: 30 }} />}

            >



                {Data.length === 0 ? (
                    <div className='justify-center h-full w-full bg-black '>
                        <div class="flex justify-center items-center h-full w-full bg-black text-white">
                            <p>No Data Uploaded</p>
                        </div>
                    </div>
                ) : (
                    Data.map((data, index) => (
                        <div key={index} className='d-flex justify-center items-center '>

                            {!data.status ? (

                                <iframe className="w-[80%] iframeResponsevi"
                                    // src={data.headLink}
                                    src={`https://www.youtube.com/embed/${data.headLink}`}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <img src={data.headLinkPic} className='w-[80%] iframeResponsevi' alt="Image"  />
                            )}
                        </div>

                    ))
                )}







            </Carousel>
        </div>
    )
}

export default CarouselComponent
