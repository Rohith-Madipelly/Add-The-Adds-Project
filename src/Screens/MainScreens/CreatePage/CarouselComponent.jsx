import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from 'react-redux';
import { ProfileAPI } from '../../../utils/APIcall';
import CustomButton from '../../../Components/UI/Button/CustomButton';

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
        <div>
            <div className="h-[60vh] sm-w-[100%] sm-h-[100%]  d-flex justify-center">
                <Carousel className='d-flex justify-center'
                    slideInterval={5000000}
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
                                        src={`https://www.youtube.com/embed/${data.headLink}`}
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



                    {/* {Data.map((data, index) => (
                            <div className='d-flex justify-center h-[100%] sm-h-[200px]'>
                                {!data.status ? <iframe className='w-[100%] h-[100%] sm-h-[200px]' src={data.headLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> :
                                    <img src={data.headLinkPic} className='w-[100%] h-[500px] sm-h-[100%]' />}

                                   
                            </div>
                        ))} */}

                </Carousel>
            </div>
        </div>
    )
}

export default CarouselComponent


{/* <div className="h-[30vw] sm-h-[200px] w-[100%]  sm-w-[100%] sm-h-[100%]  d-flex justify-center">
<Carousel className='d-flex justify-center'
    slideInterval={5000000}
>



        {Data.map((data, index) => (
            <div className='d-flex justify-center h-[100%] sm-h-[200px]'>
                {!data.status ? <iframe className='w-[100%] h-[100%] sm-h-[200px]' src={data.headLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> :
                    <img src={data.headLinkPic} className='w-[100%] h-[700px] sm-h-[1000px]' />}

                   
            </div>
        ))}
   

</Carousel>
</div> */}