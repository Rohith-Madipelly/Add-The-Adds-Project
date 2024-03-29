import React, { useEffect, useState } from 'react'
import './EditOwnPage.css'
import { Button, Carousel } from 'flowbite-react'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageSaver from '../../../utils/ImageSaver'



function EditOwnPage() {
    const location = useLocation()
    const navigate = useNavigate();
    // Access the props sent from the previous page
    const receivedData = location.state
    console.log(receivedData)
    const [PageData, setData] = useState(receivedData || { slideContent: { imageUrl: '' } })

    let optionsArray = [
        // { name: 'Design', logoImage: 'images/icons/dock-right.png' },
        { name: 'Upload image', logoImage: 'images/icons/Frame.png' },
        { name: 'Upload Video url', logoImage: 'images/icons/Frame-1.png' },
        { name: 'Text', logoImage: 'images/icons/Vector.png' },
        { name: 'Free Adds', logoImage: 'images/icons/clipboard-text-play.png' },
        { name: 'Pay Adds', logoImage: 'images/icons/clipboard-text-play.png' },
        { name: 'Gift Adds', logoImage: 'images/icons/clipboard-text-play.png' },
    ]


    return (
        <div className='w-flex'>
            <div className='h-[70px]'>

            </div>

            <div className='ImageBackgoundDesktop  pt-5 px-[100px]'>
                <div className='flex justify-center gap-10'>
                    <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white' onClick={()=>{   navigate('/Add Page');}}>My Page</Button>
                    <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Share</Button>
                    <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Add</Button>
                    <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white' onClick={()=>{navigate('/')}}>Cancel</Button>
                </div>

                <div className='DesignPage flex justify-center gap-10 h-[1000px] items-center '>
                    <div className='justify bg-black  h-auto px-[24px] py-[26px] rounded-md' >

                        {optionsArray.map((Data) => (
                            <div className='text-white flex-cols my-8'>
                                <img src={Data.logoImage} className='mx-auto' />
                                <div className='text-center'>{Data.name}</div>
                            </div>
                        ))}

                    </div>
                    <div>
                        {PageData && (
                            <div>

                                <img src={PageData.slideContent.imageUrl} onError={'/images/Rectangle 541.png'} />
                                <div className='SaveName ms-[10px] mt-5 flex justify-center pe-5'>
                                    <div className='flex bg-white rounded-sm gap-10 p-2'>
                                        <Button>Tools</Button>
                                        <Button>Colors</Button>
                                        <Button>Edit</Button>
                                    </div>
                                    <button className=''>Save</button>
                                    {/* <ImageSaver imageUrl={PageData.slideContent.imageUrl} fileName="auth-banner.jpg" /> */}
                                </div>

                            </div>

                        )}

                    </div>

                </div>


                <div className='h-[50px]'>

                </div>
            </div>
        </div>
    )
}

export default EditOwnPage