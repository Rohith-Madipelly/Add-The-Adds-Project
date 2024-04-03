import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Servicecards() {
    const userName = useSelector((state) => state.userName);
    console.log(userName)
    let tryOptions = [
        { name: "Own Status", imageLink: "images/img_rectangle_2.png", routes: "Own Status" },
        { name: "Create Page", imageLink: "images/img_rectangle_6.png", routes: "Create Page" },
        { name: "Add Page", imageLink: "images/img_rectangle_7.png", routes: `Add Page/${userName}` },
        { name: "Upload Add", imageLink: "images/img_rectangle_8.png", routes: "Upload Add" },
    ]

    return (

        <div className='px-[5em] sm:px-0 mdl:px-[2.5em]  mt-2 ms-1'>
            <p className='my-3'>You might want to try...</p>
            <div className="flex flex-row justify-start w-full  h-auto">
                <div className="grid grid-cols-4 sm:grid-cols-2 w-full gap-2">
                    {
                        tryOptions.map((Data) => (
                            <Link to={`/${Data.routes}`} className='w-[97%] '>
                                <div className="relative h-auto sm:h-[110px]">
                                    <img
                                        src={Data.imageLink}
                                        alt="own_status_one"
                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-[21px]"
                                    />
                                    <div className="relative flex justify-center w-full h-full px-0 py-[72px] sm:py-[50px] bg-gray-800_33 rounded-[21px]">
                                        <h5 as="h2" className="z-10 relative tracking-[1.00px] italic text-white">
                                            {Data.name}
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>



            </div>

        </div>

    )
}

export default Servicecards