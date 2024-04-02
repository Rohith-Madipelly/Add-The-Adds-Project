import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { ProfileAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';

function LinkCreatePage() {

    const token = useSelector((state) => state.token);

    const [LiveLink1, setLiveLink1] = useState("Live Link 1")
    const [LiveLink2, setLiveLink2] = useState("Live Link 2")

    const [GeneralLink1, setGeneralLink1] = useState("General Link 1")
    const [GeneralLink2, setGeneralLink2] = useState("General Link 2")

    const [ChanelLink1, setChanelLink1] = useState("Chanel Link 1")
    const [ChanelLink2, setChanelLink2] = useState("Chanel Link 2")


    const Apicaller = async () => {
        console.log(token)
        const res = await ProfileAPI(token)

        console.log("Data in the page", res.data.liveLinks)
        setLiveLink1(res.data.liveLinks[0])
        setLiveLink2(res.data.liveLinks[1])


        console.log("Data in the page", res.data.generalLinks)
        setGeneralLink1(res.data.generalLinks[0])
        setGeneralLink2(res.data.generalLinks[1])


        console.log("Data in the page 3", res.data.liveLinks)
        setChanelLink1(res.data.liveLinks[0])
        setChanelLink2(res.data.liveLinks[1])
    }

    const SubmitData = async () => {
        console.log("SubmitData")

    }


    useEffect(() => {
        Apicaller()
    }, [])



    return (
        <div>
            <div>


                {/* Live Links */}
                <div>
                    <p className='my-2'>Live Links</p>
                    <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                        <input
                            name="service"
                            type="text"
                            id="service"
                            // value={singleService.service}
                            // onChange={(e) => handleServiceChange(e, index)}
                            value={LiveLink1} onChange={(e) => setLiveLink1(e.target.value.toLowerCase())}
                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        {/* <div>
      <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} />
    </div> */}
                        <div className='m-3'>
                            <MdDelete size={25} color='red' onClick={() => { console.log("sa") }} />
                        </div>
                    </div>
                    <div className='flex w-[95%] border-2 rounded-lg mt-2 bg-white h-[55px]'>
                        <input
                            name="service"
                            type="text"
                            id="service"
                            value={LiveLink2} onChange={(e) => setLiveLink2(e.target.value.toLowerCase())}
                            // value={singleService.service}
                            // onChange={(e) => handleServiceChange(e, index)}
                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        <div>
                            {/* <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} /> */}
                        </div>
                        <div className='m-3'>
                            {/* <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} /> */}
                        </div>
                    </div>
                </div>

                {/* General Links */}
                <div>
                    <p className='my-2'>General Links</p>
                    <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                        <input
                            name="service"
                            type="text"
                            id="service"



                            value={GeneralLink1} onChange={(e) => setGeneralLink1(e.target.value.toLowerCase())}
                            // value={singleService.service}
                            // onChange={(e) => handleServiceChange(e, index)}
                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        <div>
                            {/* <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} /> */}
                        </div>
                        <div className='m-3'>
                            {/* <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} /> */}
                        </div>
                    </div>
                    <div className='flex w-[95%] border-2 rounded-lg mt-2 bg-white h-[55px]'>
                        <input
                            name="Link1"
                            type="text"

                            label="Link1" placeholder="Link1"

                            value={GeneralLink2} onChange={(e) => setGeneralLink2(e.target.value.toLowerCase())}
                            // error={emailError !== null}
                            // helperText={emailError}

                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        <div>
                            {/* <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} /> */}
                        </div>
                        <div className='m-3'>
                            {/* <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} /> */}
                        </div>
                    </div>
                </div>

                {/* Chanel Links */}
                <div>
                    <p className='my-2'>Chanel Links</p>
                    <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                        <input
                            name="Link1"
                            type="text"

                            label="Link1" placeholder="Link1"
                            value={ChanelLink1} onChange={(e) => setChanelLink1(e.target.value.toLowerCase())}
                            // error={emailError !== null}
                            // helperText={emailError}

                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        <div>
                            {/* <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} /> */}
                        </div>
                        <div className='m-3'>
                            {/* <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} /> */}
                        </div>
                    </div>


                    <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px] mt-2'>
                        <input
                            name="Link2"
                            type="text"

                            label="Link2" placeholder="Link1"
                            value={ChanelLink2} onChange={(e) => setChanelLink2(e.target.value.toLowerCase())}
                            // error={emailError !== null}
                            // helperText={emailError}

                            required
                            className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                        <div>
                            {/* <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} /> */}
                        </div>
                        <div className='m-3'>
                            {/* <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} /> */}
                        </div>
                    </div>

                </div>
                {/* {Data?<LinksDisplay link={linkData}/>:""} */}
            </div>
            {/* Section 2 */}
            <div className='my-5 flex justify-center'>
                <div className='w-[60%] sm:w-[95%]'>
                    {/* <div className='flex flex-col'>
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
                        </div> */}



                    <div className='flex justify-center'>
                        <button className='rounded-lg bg-red-500 items-center p-3 py-2 m-2' onClick={() => { SubmitData() }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkCreatePage