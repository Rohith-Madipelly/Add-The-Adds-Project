import React, { useEffect } from 'react'
import './css/OwnStatus.css'
import { Button, Carousel } from 'flowbite-react'
import Footter from '../Components/Footter'
import { Link } from 'react-router-dom'


function OwnStatus() {

    return (
        <div className='w-full'>
            <div className='OwnStatusImageBackgound  pt-5 px-[100px] sm:px-5 '>
                <div className='flex bg-black'>
                    <div className='w-[35%]'>
                        <Button className='my-4 bg-blue-800' as={Link} to={'/Edit Own Page'}>Own Status</Button>
                        <Button className='my-4 bg-blue-800'>Ready for themes</Button>
                    </div>
                    
                    <div className='mx-5  w-[65%] '>
                        <div className='flex gap-5'>
                            <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>My Page</Button>
                            <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Share</Button>
                            <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Add</Button>
                            <Button className='my-4 bg-white text-black  shadow-xl hover:bg-white'>Cancel</Button>
                        </div>
                        <div className='w-90  bg-white shadow-xl px-5 py-2 rounded-lg'>Search Here</div>
                    </div>
                </div>
                <div className='bg-black w-full h-[500px] sm:h-[250px] mt-5'>
                    <Carousel className='w-full h-full'>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                    </Carousel>
                </div>

                <div className='bg-black w-full h-[500px] sm:h-[250px] mt-5'>
                    <Carousel className='w-full h-full'>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                        <p>Hello Rohith madipelly </p>
                    </Carousel>
                </div>
                <div className='h-[100px]'>

                </div>
            </div>

        </div>
    )
}

export default OwnStatus