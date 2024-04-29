import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI, UserPageAPI } from '../../../utils/APIcall';
import CustomButton from '../../../Components/UI/Button/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function CarouselComponentAddPage({ userName }) {
    console.log("CarouselData >>>", userName)
    const [CarouselData, setCarouselData] = useState([])
    const [Data, setData] = useState([])


    const Apicaller = async (userName) => {

        try {
            const responsed = await UserPageAPI(userName)
            // console.log("bjdb")
            if (responsed) {
                // if (res.status === 200) {
                let resData = await responsed.data
                // console.log("Hello CarComponep", resData)
                console.log("Hello CarComponep", resData.ownHeaders)
                
                // setCarouselData(resData.ownHeaders)
                setData(resData.ownHeaders)
                // setTimeout(() => {
                //   navigate('/Contests');
                // }, 3000);
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
        <div>
        <div className="h-[60vh] sm-w-[100%] sm-h-[100%]  d-flex justify-center">
            <Carousel className='d-flex justify-center'
                slideInterval={5000000}
                style={{ color: 'black' }}
                leftControl={<FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black',fontSize:30 }}  />} 
                rightControl={<FontAwesomeIcon icon={faChevronRight} style={{ color: 'black',fontSize:30 }} />} 
            >



                {Data.length === 0 ? (
                    <div className='justify-center h-full w-full bg-black'>
                      
                        <div class="flex justify-center items-center h-full w-full bg-black text-white">
                            <p>No Data Uploaded</p>
                        </div>

                    </div>

                ) : (
                    Data.map((data, index) => (
                        <div key={index} className='d-flex justify-center h-[100%] sm-h-[200px]'>
                            {!data.status ? (

                                <iframe
                                    className='w-[100%] h-[100%] sm-h-[200px]'
                                    // src={data.headLink}
                                    src={`https://www.youtube.com/embed/${data.headerData.headLink}`}
                                    title="YouTube video player"
                                    frameborder="0"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <img src={data.headLinkPic} className='w-[100%] h-[700px] sm-h-[1000px]' alt="Image" />
                            )}
                        </div>
                    ))
                )}



            </Carousel>
        </div>
    </div>
    )
}

export default CarouselComponentAddPage


