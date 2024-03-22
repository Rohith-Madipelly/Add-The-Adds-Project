import React from 'react'
import Loader1 from '../shared/Loaders/Loader1'

function NotFoundPage() {

  
    return (
        <div className='w-full h-[calc(100vh-80px)] flex justify-center items-center ' >
            <div>
            <div class="relative flex justify-center items-center mb-5">
                <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" class="rounded-full h-28 w-28"/>
            </div>

            <h1 className="text-bold">Not Found Page</h1>
        
            </div>



            
        </div>



    )
}

export default NotFoundPage