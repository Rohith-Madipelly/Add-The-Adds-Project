import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI } from '../../../utils/APIcall';

function CarouselComponent() {
    const token = useSelector((state) => state.token);
    const [Data, setData] = useState([])

    const Apicaller = async () => {
        console.log(token)
        try {

            const res = await ProfileAPI(token)
            setData(res.data.ownHeaders)

        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        Apicaller()
    }, [])


    return (
        <div>
            <div className="h-[30vw] sm-h-[200px] w-[100%]  sm-w-[100%]  d-flex justify-center">
                <Carousel className='d-flex justify-center'
                    slideInterval={5000000}
                >
                    {Data.map((data, index) => (
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

export default CarouselComponent


