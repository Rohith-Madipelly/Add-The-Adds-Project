import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI, UserPageAPI } from '../../../utils/APIcall';
import CustomButton from '../../../Components/UI/Button/CustomButton';

function CarouselComponentAddPage({ userName }) {
    console.log("CarouselData >>>", userName)
    const [CarouselData, setCarouselData] = useState([])


    const Apicaller = async (userName) => {

        try {
            const responsed = await UserPageAPI(userName)
            if (responsed) {
                // if (res.status === 200) {
                let resData = await responsed.data
                console.log("Hello CarComponep", resData)
                setCarouselData(resData.ownHeaders)
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
            <div className="h-[30vw] sm-h-[200px] w-[100%]  sm-w-[100%]  d-flex justify-center">
                <Carousel className='d-flex justify-center'
                    slideInterval={5000000}
                >



                    {CarouselData.map((data, index) => (
                        <div className='d-flex justify-center h-[100%] sm-h-[200px]'>
                            {!data.status ? <iframe className='w-[100%] h-[100%] sm-h-[200px]' src={data.headLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> :
                                <img src={data.headLinkPic} className='w-[100%] h-[500px]' />}
                        </div>
                    ))}


                </Carousel>
            </div>
        </div>
    )
}

export default CarouselComponentAddPage


