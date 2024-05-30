import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI, UserPageAPI } from '../../../utils/APIcall';
import CustomButton from '../../../Components/UI/Button/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function CarouselComponentAddPage({ userName }) {
    console.log("CarouselData >>>", userName)

    const [Data, setData] = useState([])


    const Apicaller = async (userName) => {
        try {
            const responsed = await UserPageAPI(userName)
            if (responsed) {
                let resData = await responsed.data
                console.log("", resData.ownHeaders)
                setData(resData.ownHeaders)
            }
            else {
                console.log("No Responsed")
            }
        } catch (error) {

            if (error.response) {
                if (error.response.status === 401) {

                } else if (error.response.status === 404) {

                } else if (error.response.status === 500) {
                } else {
                }
            } else if (error.request) {
            } else {
            }
        }
    }

    useEffect(() => {
        Apicaller(userName)
    }, [])

    return (

        <div className="Carousel-wapper h-[90%] w-[100%] d-flex justify-center mx-auto overflow-hidden">
            <Carousel className='d-flex justify-center  carousel-arrow'
                slideInterval={5000000}
                pauseOnHover
                style={{ color: 'black' }}
                leftControl={<FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black', fontSize: 30 }} />}
                rightControl={<FontAwesomeIcon icon={faChevronRight} style={{ color: 'black', fontSize: 30 }} />}
            >



                {Data.length === 0 ? (
                    <div className='justify-center h-full '>
                        <div class="flex justify-center items-center h-[80%] w-[70%] bg-black text-white mx-auto">
                            <p>No Data Uploaded</p>
                        </div>
                    </div>

                ) : (
                    Data.map((data, index) => (
                        <div key={index} className='d-flex justify-center item-center'>
                            {!data.status ? (

                                <iframe
                                    className='w-full h-full px-10 iframeResponsevi'
                                    style={{height:400}}
                                    // src={data.headLink}
                                    src={`https://www.youtube.com/embed/${data.headLink}`}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <img src={`https://admin.addtheadd.com/${data.headLinkPic}`} className='px-10  object-scale-down iframeResponsevi' alt="Image" />   
                            )}
                        </div>
                    ))
                )}
            </Carousel>
        </div>

    )
}

export default CarouselComponentAddPage


