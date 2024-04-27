import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { AddLinkAPI, DeleteLinkAPI, ProfileAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';
import { IoAddCircleSharp } from 'react-icons/io5';
import { FaUpload } from "react-icons/fa";
import { showToastMessage_error, showToastMessage_success } from '../../../shared/Toaster';

function LinkCreatePage() {

    const token = useSelector((state) => state.token);


    const [APIDATA, setAPIDATA] = useState([""])

    const [LiveLinkURLS, setLiveLinkURLS] = useState([""])
    const [GeneralLinkURLS, setGeneralLinkURLS] = useState([""])
    const [ChanelLinkURLS, setChanelLinkURLS] = useState([""])

    const [error, setError] = useState()


    const [linksData_Number, setLinksData_Number] = useState({
        live_DataNumber: "",
        General_DataNumber: "",
        Chanel_DataNumber: ""
    });

    const Apicaller = async () => {
        console.log(token)
        const res = await ProfileAPI(token)

        const LINK = res.data.Links;

        console.log("Data in the page", LINK)
        setLiveLinkURLS(LINK.live_links)
        console.log(LiveLinkURLS)

        setLinksData_Number(prevState => ({
            ...prevState,
            live_DataNumber: LINK.live_links.length
        }));

        setLinksData_Number(prevState => ({
            ...prevState,
            General_DataNumber: LINK.general_links.length
        }));

        setLinksData_Number(prevState => ({
            ...prevState,
            Chanel_DataNumber: LINK.chanel_links.length
        }));




        setGeneralLinkURLS(LINK.general_links)
        console.log("><<",LINK.general_links)

        setChanelLinkURLS(LINK.chanel_links)
        console.log(ChanelLinkURLS)

    }


    const addLinkToArray = () => {
        // Replace 'yourLink' with the link you want to add
        const newLink = '';
        setLiveLinkURLS(prevLinks => [...prevLinks, newLink]);
    }

    const addsetGeneralLinkURLSToArray = () => {
        // Replace 'yourLink' with the link you want to add
        const newLink = '';
        setGeneralLinkURLS(prevLinks => [...prevLinks, newLink]);
    }

    const addsetChanelLinkURLSToArray = () => {
        // Replace 'yourLink' with the link you want to add
        const newLink = '';
        setChanelLinkURLS(prevLinks => [...prevLinks, newLink]);
    }

    const AddLinkCaller = async (LinkName, LinkURL) => {
        
        if (LinkURL) {

            const res = await AddLinkAPI(token, LinkName, LinkURL)
            console.log("Data Deleted>", res)
            if (res) {
                showToastMessage_success(res.data.message)
                Apicaller()
            }
            else {

            }
        }
        else {
            showToastMessage_error("No Link")
        }
    }

    const DeleteLinkCaller = async (LinkName, LinkURL) => {


        // if(linksData_Number.live_DataNumber){
        //     console.log("sajbaj")
        // }


        if (LinkURL) {

            const res = await DeleteLinkAPI(token, LinkName, LinkURL)
            console.log("Data Deleted>", res)
            if (res) {
                showToastMessage_success(res.data.message)
                Apicaller()
            }
            else {

            }
        }
        else {
            showToastMessage_error("No Link")
        }
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

                {/*<<<<<< Links >>>>>>>*/}
                <div>
                    {/* Live Links */}
                    <div className='mb-3'>
                        <div className='flex justify-between w-[95%]'>
                            <p className='my-1'>Live Links</p>
                            <p onClick={() => { addLinkToArray() }}>Add More Links</p>
                        </div>
                        {LiveLinkURLS.length > 0 ? (
                            LiveLinkURLS.map((link, index) => (
                                <div >
                                    <div key={index} className={`flex w-[95%] border-2 rounded-lg bg-white ${error ? 'bg-black' : 'bg-black'} h-[55px] mb-2`}>


                                        <input
                                            name={`service-${index}`}
                                            type="text"
                                            id={`service-${index}`}
                                            placeholder='Add Live Like Here'
                                            value={link}
                                            onChange={(e) => {
                                                const updatedLinks = [...LiveLinkURLS];
                                                updatedLinks[index] = e.target.value;
                                                setLiveLinkURLS(updatedLinks);
                                            }}

                                            // onChange={(e) => {
                                            //     const updatedLinks = [...LiveLinkURLS];
                                            //     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Regular expression for URL validation
                                            //     const isValidUrl = urlRegex.test(e.target.value.toLowerCase());

                                            //     if (isValidUrl) {
                                            //         updatedLinks[index] = e.target.value.toLowerCase();
                                            //         setLiveLinkURLS(updatedLinks);
                                            //     } else {
                                            //         updatedLinks[index] = e.target.value.toLowerCase();
                                            //         setLiveLinkURLS(updatedLinks);
                                            //         // Handle invalid URL input here (e.g., show error message)
                                            //         // For example, you can set an error state to display an error message
                                            //         setError('Please enter a valid URL');
                                            //     }
                                            // }}


                                            required
                                            className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                        />

                                        <div>
                                            {/* <IoAddCircleSharp
                                            size={25}
                                            color='blue'
                                            className='m-3'
                                            onClick={() => { AddLinkCaller("live_links", `${link}`) }}
                                        /> */}

                                            {index >= linksData_Number.live_DataNumber ? <FaUpload size={22}
                                                color='blue'
                                                className='m-3' onClick={() => { AddLinkCaller("live_links", `${link}`) }} /> : ""}

                                        </div>

                                        {index < linksData_Number.live_DataNumber ?
                                            <>
                                                {link && (
                                                    <div className='m-3'>
                                                        {/* <MdDelete
                                                size={25}
                                                color='red'
                                                onClick={() => {
                                                    const updatedLinks = [...LiveLinkURLS];
                                                    updatedLinks.splice(index, 1);
                                                    setLiveLinkURLS(updatedLinks);
                                                }}
                                            /> */}


                                                        <MdDelete
                                                            size={25}
                                                            color='red'
                                                            onClick={() => { DeleteLinkCaller("live_links", `${link}`) }}
                                                        />
                                                    </div>
                                                )}</> : ""}

                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                                <input
                                    name={`service-0`}
                                    type="text"
                                    id={`service-0`}
                                    value=""
                                    placeholder='Add Live Link Here'

                                    onChange={(e) => {
                                        const updatedLinks = [...LiveLinkURLS];
                                        updatedLinks[0] = e.target.value;
                                        setLiveLinkURLS(updatedLinks);
                                    }}
                                    required
                                    className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                />
                            </div>
                        )}
                        <p className='text-red-500'>{error}</p>
                    </div>

                    {/* General Links */}
                    <div className='mb-3'>
                        <div className='flex justify-between w-[95%]'>
                            <p className='my-1'>General Links</p>
                            <p onClick={() => { addsetGeneralLinkURLSToArray() }}>Add More Links</p>
                        </div>
                        {GeneralLinkURLS.length > 0 ? (
                            GeneralLinkURLS.map((link, index) => (
                                <div>
                                    <div key={index} className={`flex w-[95%] border-2 rounded-lg bg-white ${error ? 'bg-black' : 'bg-black'} h-[55px] mb-2`}>
                                        <input
                                            name={`service-${index}`}
                                            type="text"
                                            id={`service-${index}`}
                                            placeholder='Add General Link Here'

                                            value={link}
                                            onChange={(e) => {
                                                const updatedLinks = [...GeneralLinkURLS];
                                                updatedLinks[index] = e.target.value;
                                                setGeneralLinkURLS(updatedLinks);
                                            }}
                                            required
                                            className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                        />
                                        <div>
                                            {index >= linksData_Number.General_DataNumber ? <FaUpload size={22} color='blue' className='m-3' onClick={() => { AddLinkCaller("general_links", `${link}`) }} /> : ""}
                                        </div>
                                        {index < linksData_Number.General_DataNumber ?
                                            <>
                                                {link && (
                                                    <div className='m-3'>
                                                        <MdDelete
                                                            size={25}
                                                            color='red'
                                                            onClick={() => { DeleteLinkCaller("general_links", `${link}`) }}
                                                        />
                                                    </div>
                                                )}
                                            </> : ""}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                                <input
                                    name={`service-0`}
                                    type="text"
                                    placeholder='Add General Link Here'

                                    id={`service-0`}
                                    value=""
                                    onChange={(e) => {
                                        const updatedLinks = [...GeneralLinkURLS];
                                        updatedLinks[0] = e.target.value;
                                        setGeneralLinkURLS(updatedLinks);
                                    }}
                                    required
                                    className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                />
                            </div>
                        )}
                        <p className='text-red-500'>{error}</p>
                    </div>

                    {/* Channel Links */}
                    <div className='mb-3'>
                        <div className='flex justify-between w-[95%]'>
                            <p className='my-1'>Channel Links</p>
                            <p onClick={() => { addsetChanelLinkURLSToArray() }}>Add More Links</p>
                        </div>
                        {ChanelLinkURLS.length > 0 ? (
                            ChanelLinkURLS.map((link, index) => (
                                <div>
                                    <div key={index} className={`flex w-[95%] border-2 rounded-lg bg-white ${error ? 'bg-black' : 'bg-black'} h-[55px] mb-2`}>
                                        <input
                                            name={`service-${index}`}
                                            placeholder='Add Channel Like Here'

                                            type="text"
                                            id={`service-${index}`}
                                            value={link}
                                            onChange={(e) => {
                                                const updatedLinks = [...ChanelLinkURLS];
                                                updatedLinks[index] = e.target.value;
                                                setChanelLinkURLS(updatedLinks);
                                            }}
                                            required
                                            className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                        />
                                        <div>
                                            {index >= linksData_Number.Chanel_DataNumber ? <FaUpload size={22} color='blue' className='m-3' onClick={() => { AddLinkCaller("chanel_links", `${link}`) }} /> : ""}
                                        </div>
                                        {index < linksData_Number.Chanel_DataNumber ?
                                            <>
                                                {link && (
                                                    <div className='m-3'>
                                                        <MdDelete
                                                            size={25}
                                                            color='red'
                                                            onClick={() => { DeleteLinkCaller("chanel_links", `${link}`) }}
                                                        />
                                                    </div>
                                                )}
                                            </> : ""}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                                <input
                                    name={`service-0`}
                                    type="text"
                                    id={`service-0`}
                                    placeholder='Add Channel Like Here'

                                    value=""
                                    onChange={(e) => {
                                        const updatedLinks = [...ChanelLinkURLS];
                                        updatedLinks[0] = e.target.value;
                                        setChanelLinkURLS(updatedLinks);
                                    }}
                                    required
                                    className='border-none focus:outline-none focus:border-none w-full h-[50px]'
                                />
                            </div>
                        )}
                        <p className='text-red-500'>{error}</p>
                    </div>


      
                </div>

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



                    {/* <div className='flex justify-center'>
                        <button className='rounded-lg bg-red-500 items-center p-3 py-2 m-2' onClick={() => { SubmitData() }}>Submit</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LinkCreatePage