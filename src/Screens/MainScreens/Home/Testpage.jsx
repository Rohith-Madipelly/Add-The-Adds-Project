import React from 'react'
import CustomButton from '../../../Components/UI/Button/CustomButton'


function Testpage() {
    let imagesBe = [
        { name: "hero1", ImageLink: '/images/icons2/Rectangle 552.png' },
        { name: "hero1", ImageLink: '/images/icons2/Rectangle 553.png' },
        { name: "hero1", ImageLink: '/images/icons2/Rectangle 554.png' }
    ]
    return (
        <div className=' w-full flex justify-center'>

            <div className='w-[70vw] h-[auto]'>
                <div className='grid grid-cols-4 md:grid-flow-col-3 sm:grid-cols-2 gap-8 gap-y-3'>
                    <CustomButton
                        classStyle='text-blue-950 font-bold  text-xs'
                        Linkurl='/Home'
                    >
                        My Page <img src='/images/icons2/Frame (1).png' className='inline ps-2' />
                    </CustomButton>

                    <CustomButton
                        classStyle='text-blue-950 font-bold text-xs'
                    // Linkurl='/Share'
                    >
                        Share <img src='/images/icons2/Frame.png' className='inline ps-2' />
                    </CustomButton>


                    <CustomButton
                        classStyle='text-blue-950 font-bold text-xs '
                        Linkurl='/Add'
                    >
                        Add <img src='/images/icons2/Vector.png' className='inline ps-2' />
                    </CustomButton>



                    <CustomButton
                        classStyle='text-blue-950 font-bold text-xs'
                        Linkurl='/Pink'
                    >
                        cancel
                    </CustomButton>
                </div>

                <div className='mt-10'>
                    <h1>Upload Add</h1>
                    <div className='mt-5'>
                        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5'>
                            {imagesBe.map((Data) => (
                                <div>
                                    <img src={Data.ImageLink} />
                                </div>
                            ))}
                        </div>
                        <div className='text-center tracking-[3.00px] my-5 '><button className='bg-red-500 p-5 rounded-lg'>Select Free Ads Option </button></div>
                    </div>
                    {/* <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-5'> */}
                    <div className='grid grid-cols-6 my-10 gap-6'>
                        <div className='col-span-2 '>
                            <CustomButton>Upload My Page</CustomButton>
                            <CustomButton>Add Ads Links</CustomButton>
                            <CustomButton>Gift Ads</CustomButton>
                            <CustomButton>Delete</CustomButton>
                        </div>
                        <div className='col-span-4 bg-slate-900'>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>

            </div>
        </div>
    )
}

export default Testpage