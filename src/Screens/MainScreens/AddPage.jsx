import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomButton from '../../Components/UI/Button/CustomButton'

import NDShare from '../../Components/NavBar/NavDropDown/NDShare';
import { ProfileAPI, UserPageAPI } from '../../utils/APIcall';
import { useSelector } from 'react-redux';
import LinksDisplay from '../../Components/LinksDisplay';
import { showToastMessage_success, showToastMessage_warn } from '../../shared/Toaster';
import CarouselComponent from './CreatePage/CarouselComponent';
import CarouselComponentAddPage from './AddPage/CarouselComponentAddPage';
import { useLocation } from 'react-router-dom';
import Loading from '../../utils/Loadings/Loading';

function AddPage() {
  const userName = useSelector((state) => state.userName);

  const [Dataapi, setDataapi] = useState([])
  const [OtherUser, setOtherUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();


  const LocationStateTest = () => {
    // Check if there's a state with a message
    if (location.state && location.state.message) {
      // Show toaster notification with the message
      showToastMessage_warn(location.state.message);
    }
  }


  const APIHandler = async (userName) => {
    setIsLoading(true)
    try {
      const responsed = await UserPageAPI(userName)
      if (responsed) {
        let resData = await responsed.data
        setDataapi(resData)
        setOtherUser(resData.userPages)
      }
      else {
        console.log("No Responsed")
      }
    } catch (error) {
      setIsLoading(false)

      if (error.response) {
        if (error.response.status === 401) {

        } else if (error.response.status === 404) {

        } else if (error.response.status === 500) {
        } else {
        }
      } else if (error.request) {
      } else {
      }
    }
    finally {
      // setTimeout(()=>{
      setIsLoading(false)

      // },9000)
    }
  }

  useEffect(() => {
    LocationStateTest()
    APIHandler(userName)
  }, [userName])



  let NavDropsOption = [
    { name: "My Page", link: "/My Page" },
    { name: "Share", link: "/Share" },
    { name: "Share Add Link", link: "/Share Add Link" },
    { name: "Page Add", link: "/Page Add" },
    { name: "Save", link: "/Save" },
    { name: "Upload New", link: "/Upload New" },
    { name: "Delete", link: "/Delete" }
  ];



  if (isLoading) {
    return <Loading />
  }
  else {

    return (
      <div className='w-full px-8 new_Page_GroundImage'>
        <div >

     
        <div className='h-[70px]'>

        </div>
        {/* {isLoading && <Loading />} */}
        <div className='grid grid-cols-12 py-4'>
          <div className='sm:col-span-3'><div className='hidden sm:block'><NDShare /></div></div>
          <div className='col-span-12 sm:col-span-9'><div className='font-bold text-xl mb-2 text-center sm:text-start'>Add Page </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-[100%]'>
          {/* Section 1 */}
          <div className='grid grid-flow-col grid-cols-8 w-full m-5 sm:m-0'>

            <div className='col-span-2 bg-red border-b border-r p-[40px] mx-5 sm:hidden'>
              {NavDropsOption.map((Data, index) => (
                <CustomButton classStyle={'mt-2 bg-white h-auto'} key={index}>{Data.name}</CustomButton>
              ))}
            </div>

            <div className='col-span-5 sm:col-span-10 '>

              <CarouselComponentAddPage userName={userName} />

              <div className='my-4  flex justify-end'>
                <div className='grid grid-flow-col gap-2 sm:w-[90vw]'>
                  <CustomButton classStyle={'my-3 bg-white h-auto'}>
                    {Dataapi.Likes} Likes
                  </CustomButton>
                  <CustomButton classStyle={'my-3 bg-white h-auto'}>{Dataapi.views} Views</CustomButton>

                </div>
              </div>
            </div>
          </div>
        </div>






        {/* Section 2 */}
        <div className='w-[100%] flex justify-center items-center"'>


          <div className='w-[90%] mt-10  gap-1 gap-y-2 grid grid-flow-col grid-col-2 sm:grid-rows-2 sm:mx-0 sm:justify-center'>
            {OtherUser.map((MapData, index) => (
              <div key={index} className="flex justify-center relative w-[100%] px-auto">
                <a href={MapData.username}>
                  <img src={MapData.recentHeader.headLinkPic} className='h-[100%] ' />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 flex items-center justify-center">
                    <span className="text-white text-xl">Click to view full page</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className='my-5 flex justify-center'>
          <div className='w-[70%] sm:w-[100%]'>
            <h2 class="text-lg font-bold mb-4 decoration-8">Links</h2>

            <div>
              <h2 class="text-lg font-bold mb-2 decoration-1">live links</h2>
              {Dataapi.Links.live_links.map((data, index) => (
                <div key={index} class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                  <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                </div>
              ))}
            </div>


            <div>
              <h2 class="text-lg font-bold mb-2 decoration-1">General links</h2>
              {Dataapi.Links.general_links.map((data, index) => (
                <div key={index} class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                  <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                </div>
              ))}
            </div>

            <div>
              <h2 class="text-lg font-bold mb-2 decoration-1">Chanel links</h2>
              {Dataapi.Links.chanel_links.map((data, index) => (
                <div key={index} class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                  <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                </div>
              ))}
            </div>



            <div className='flex justify-center mt-5'>
              {/* <button className='rounded-lg bg-blue-600 items-center p-3 py-2 m-2 w-52 text-white uppercase' onClick={() => { console.log(">>>", LinkList) }} >Submit</button> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }


}

export default AddPage