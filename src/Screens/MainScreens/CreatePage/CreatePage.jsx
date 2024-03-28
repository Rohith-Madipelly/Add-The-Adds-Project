import React from 'react'
import './CreatePage.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import '../Home/Home.css'
import NDShare from '../../../Components/NavBar/NavDropDown/NDShare'
function CreatePage() {

    const copyToClipboard = () => {
        console.log("sd")
    }
    
    let NavDropsOption = [
        { name: "My Page", link: "/My Page" },
        { name: "Share", link: "/Share" },
        { name: "Share Add Link", link: "/Share Add Link" },
        { name: "Page Add", link: "/Page Add" },
        { name: "Save", link: "/Save" },
        { name: "Upload New", link: "/Upload New" },
        { name: "Delete", link: "/Delete" }
    ];




    return (
        <div className='new_Page_GroundImage'>
      <div className='h-[70px]'>

</div>

            <div className='w-full px-8 sm:px-2 py-5'>

                <div className='grid grid-cols-12 '>
                    <div className='sm:col-span-3'><div className='hidden sm:block'><NDShare /></div></div>
                    <div className='col-span-12 sm:col-span-9'><div className='font-bold text-xl mb-5 text-center sm:text-start'>Create a new Page </div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-[100%]'>
                    {/* Section 1 */}
                    <div className='grid grid-flow-col grid-cols-8 w-full m-5 sm:m-0'>
                        <div className='col-span-2 bg-red border-b border-r p-[40px] mx-5 sm:hidden'>
                            {NavDropsOption.map((Data) => (
                                <CustomButton classStyle={'mt-2 bg-white h-auto'}>{Data.name}</CustomButton>
                            ))}
                        </div>

                        <div className='col-span-5 sm:col-span-10 '>
                            <div><img src='/images/madam.png' className='rounded-lg  '></img></div>
                            <div className='my-4  flex justify-end'>
                                <div className='grid grid-flow-col gap-2 sm:w-[90vw]'>
                                    <CustomButton classStyle={'my-3 bg-white h-auto'}>17k | </CustomButton>
                                    <CustomButton classStyle={'my-3 bg-white h-auto'}>20k Views</CustomButton>
                                    <CustomButton classStyle={'my-3 bg-white h-auto'}>Upload Video</CustomButton>
                                    <CustomButton classStyle={'my-3 bg-white h-auto'}>Image</CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='my-5 flex justify-center'>
                    <div className='w-[60%] sm:w-[95%]'>
                        <div className='flex flex-col'>
                            <label htmlFor="Live Link">Live Link</label>
                            <input name='Live Link' placeholder='Upload Live Link' />
                        </div>
                        <div className='flex flex-col my-5'>
                            <label htmlFor="Live Link">Live Link</label>
                            <input name='Live Link' placeholder='Upload Live Link' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Live Link">Live Link</label>
                            <input name='Live Link' placeholder='Upload Live Link' />
                        </div>

                        <div className='my-4'>

                            <label htmlFor="Live Link">User Page Link</label>
                            <div className=' gap-5 my-4 grid grid-cols-2 sm:grid-cols-1 '>
                                <div className='flex'>
                                    <div><img className='flex w-[400px] h-[140px] overflow-hidden rounded-lg' src='/images/AuthBanner/123.jpeg'></img></div>
                                </div>
                                <div className='flex'>
                                    <div className='w-[400px] h-[140px] overflow-hidden rounded-lg text-center flex justify-center place-items-center  bg-white border border-2'>

                                        <div onClick={copyToClipboard}>ccs</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button className='rounded-lg bg-red-500 items-center p-3 py-2 m-2'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreatePage