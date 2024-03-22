import React from 'react'
import { Link } from 'react-router-dom'

function Premier_Add_Page() {
    return (
        <Link to={`/screen`} className='w-[100%] '>
            <div className='px-[5em] sm:px-0 mdl:px-[2.5em] md:px-[1em] mt-[2em]'>
                <div>
                    <div className='flex flex-col items-center justify-center  w-full h-full mx-auto'>
                        <h1>GET A PLAN BECOME A CUSTOMER</h1>
                        <div className='bg-black h-[645px] w-[644px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]  my-5'>
                            <img src='/images/Home/premiere.jpeg' className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Premier_Add_Page