import React, { useEffect, useState } from 'react'
import CustomButton from '../../Components/UI/Button/CustomButton'

import { LIKEAPI, UserPageAPI } from '../../utils/APIcall';
import { useSelector } from 'react-redux';
import { showToastMessage_error, showToastMessage_warn } from '../../shared/Toaster';
import CarouselComponentAddPage from './AddPage/CarouselComponentAddPage';
import { useLocation } from 'react-router-dom';
import Loading from '../../utils/Loadings/Loading';
import { MdThumbUp } from 'react-icons/md';
import { NotInLogin } from './AddPage/NotInLogin';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { ShareModel } from '../../utils/ShareModel';

function AddPage() {

  const [userName, setUserName] = useState("")

  const userName11 = useSelector((state) => state.userName);


  let { userNameParams } = useParams();


  useEffect(() => {
    if (userNameParams != "undefined") {
      setUserName(userNameParams)
    }
    else {
      setUserName(userName11)

    }
  }, [userName])


  const navigate = useNavigate();
  const [Dataapi, setDataapi] = useState([])
  const [OtherUser, setOtherUser] = useState([ {
    "_id": "66543340ee20dc798168292b",
    "username": "Rachana",
    "recentHeader": {
        "_id": "665483de0f8c4fcca185705f",
        "headLinkPic": "https://admin.addtheadd.com/headerPics/1716814814571.png",
        "status": true
    }
}])
  const [isLoading, setIsLoading] = useState(true);
  const [currentURl, setCurrentURl] = useState(true);



  const [live_links, setLive_links] = useState([]);
  const [general_links, setGeneral_links] = useState([]);
  const [chanel_links, setChanel_links] = useState([]);

  const location = useLocation();
  const [Like, setLike] = useState(0)
  const [liked, setLiked] = useState(false);


  const token = useSelector((state) => state.token);


  const LocationStateTest = () => {
    // Check if there's a state with a message
    if (location.state && location.state.message) {
      // Show toaster notification with the message
      showToastMessage_warn(location.state.message);
    }
  }


  const APIHandler = async (userName) => {
    setIsLoading(true)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", userName)
    try {
      const responsed = await UserPageAPI(userName)
      if (responsed) {
        let resData = await responsed.data

        setOtherUser(responsed.data.userPages)
        console.log("OtherUserDaat>>>> ", OtherUser,resData.userPages)

        setDataapi(resData)

        setLive_links(resData.Links.live_links)
        setGeneral_links(resData.Links.general_links)
        setChanel_links(resData.Links.chanel_links)
       
        // console.log("Hello", Dataapi.Likes)
        setLike(responsed.data.Likes)
      }
      else {
        console.log("No Responsed")
      }
    } catch (error) {
      setIsLoading(false)

      if (error.response) {
        if (error.response.status === 401) {
          console.log(error.response)
       

        } else if (error.response.status === 404) {
          showToastMessage_error(error.response.data.message)
          setTimeout(() => {
            navigate("/")
          }, 2000)

        } else if (error.response.status === 500) {
        } else {
        }
      } else if (error.request) {
      } else {
      }
    }
    finally {
      setIsLoading(false)
      console.log("KLLLL",OtherUser)
    }
  }

  const toggleLike = () => {
    if (token) {
      LikeAPICall()
    } else {
      handleImageOpenModal()
    }
  }

  const LikeAPICall = async () => {
    console.log("calling LIKE API >>>>>>>>>>>>>>>>>>")
    try {
      const res = await LIKEAPI(token, userName)
      if (res) {
        setLiked(!liked);
        console.log("like inda", res.data)
        if (res.data.message === "liked") {
          setLike(prevPage => prevPage + 1)
          setLiked(true)

        }
        else {
          setLike(prevPage => prevPage - 1)
          setLiked(false)

        }

      }
    } catch (e) {
      console.log("hjsbkdf", e)
    } finally {
      console.log("function Ended")
    }
  }
  useEffect(() => {
    LocationStateTest()
    APIHandler(userName)
  }, [userName])

  const [isLOGINModalOpen, setisLOGINModalOpen] = useState(false);

  const handleImageOpenModal = () => {
    handleImageOpenModal
    setisLOGINModalOpen(true);
  };

  const handleisLOGINCloseModal = () => {
    setisLOGINModalOpen(false);
  };

  const handleisLOGINSubmit = async () => {
    console.log("Hello GOing to login 123")
    navigate("/login")
    setisLOGINModalOpen(false);
  };

  ;



  // Image models
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);

  const handlePageOpenModal = () => {
    handlePageOpenModal
    setIsPageModalOpen(true);
  };

  const handlePageCloseModal = () => {
    setIsPageModalOpen(false);
  };

  const handlePageSubmit = async () => {
    setIsPageModalOpen(false);
  };

  ;


  useEffect(() => {
    LocationStateTest()
    APIHandler(userName)
    const currentUrl = window.location.href;
    setCurrentURl(currentUrl)
  }, [userName])




  const [isShareModelOpen, setIsShareModelOpen] = useState(false);

  const openShareModel = () => {
    setIsShareModelOpen(true);
  };

  const closeShareModel = () => {
    setIsShareModelOpen(false);
  };

  const handleShare = (link, platform) => {
    if (platform === "whatsapp") {
      const linkMessage = "Vist My Page";
      const image = "https://analogueitsolutions.com/assets/img/Logo%20white%20background.png";

      // Encode message, image URL, and link
      const encodedMessage = encodeURIComponent(linkMessage);
      const encodedImage = encodeURIComponent(image);
      const encodedLink = encodeURIComponent(link);

      // Compose the message with link, additional text, and image
      const message = `${encodedMessage}%0A%0AWebsite: Your additional text here.%0A%0AUser Page: ${encodedLink}`;

      // Open WhatsApp with the composed message
      window.open(`https://api.whatsapp.com/send?text=${message}`);
    }

    else if (platform === "instagram") {
      const linkMessage = "Visit My Page";
      const image = "https://analogueitsolutions.com/assets/img/Logo%20white%20background.png";
      const link = "https://yourpage.com"; // Replace this with your actual link

      // Compose the caption with link, additional text, and image
      const caption = `${linkMessage}%0A%0AWebsite: Your additional text here.%0A%0AUser Page: ${link}`;

      // Construct the Instagram post URL
      const instagramPostUrl = `instagram://library?AssetPath=${image}&Caption=${caption}`;

      // Open Instagram with the pre-filled caption
      window.open(instagramPostUrl);
    }

    // Implement logic to share the link through various platforms
    console.log('Sharing link:', link);
    // You can use libraries like react-share to implement sharing functionalities
    // Example: share on WhatsApp
    // window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`);
  };

  if (isLoading) {
    return <Loading />
  }
  else {

    return (
      <div className='w-full  new_Page_GroundImage'>
        <div >
          <div className='h-[70px]'> </div>

          <div className='grid grid-cols-12 py-1'>
            <div className='col-span-12 sm:col-span-12'>
              <div className='font-bold text-xl mb-2 text-center sm:text-center'> {userName ? <>Its {userName}'s Page</> : "Page View"}</div>
            </div>
          </div>

          <div className='flex justify-center'>

            <div className='w-[60%] mdl-w-[70%]  sm:w-[160%] h-[450px] sm:h-[350px]'>
              <CarouselComponentAddPage userName={userName} />

              <div className='flex justify-end px-6 '>
                <div className='grid grid-flow-col gap-2 sm:w-[90vw]'>

                  <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={toggleLike}>
                    {liked ? <MdThumbUp color="blue" size={25} /> : <MdThumbUp size={25} />}
                    <p className='ms-2'>{Like} Likes</p>
                  </CustomButton>

                  <NotInLogin isOpen={isLOGINModalOpen} onClose={handleisLOGINCloseModal} onSubmit={handleisLOGINSubmit} />
                  <CustomButton classStyle={'my-3 bg-white h-auto'}>{Dataapi.views} Views </CustomButton>
                  <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { openShareModel() }}>Share</CustomButton>

                  <ShareModel isOpen={isShareModelOpen} onClose={closeShareModel} onSubmit={handleShare} linkData={currentURl} />
                </div>
              </div>

            </div>
          </div>




          <div className='h-[20px]'>

          </div>


          {/* Section 2 */}
          <div className=' flex justify-center items-center"'>


            {/* <div className='w-[80%] h-[300px] mt-10  gap-1 gap-y-2 grid grid-flow-col grid-col-2 sm:grid-rows-2 sm:mx-0 sm:justify-center rounded-lg overflow-hidden'> */}
            <div className='flex justify-center sm:h-[80%] gap-4 sm:flex-col sm:ml-4 sm:pr-[10px]'>
            {OtherUser.length === 0 ? (
              <div className='text-center text-black font-bold'>No userpage is available</div>
            ) : (OtherUser.map((MapData, index) => ( 
                <div key={index} className=" relative w-[400px] h-[100%] px-auto rounded-lg sm:ml-2 sm:pr-[10vw]">
                  <a href={MapData.username}>
                    <img src={`https://admin.addtheadd.com/${MapData.recentHeader.headLinkPic}`}
                     className='h-[100%] rounded-lg sm:ml-4 ]'/>
                    <div className="sm:ml-2 sm:mr-[5vw] absolute inset-0 bg-black opacity-0 hover:opacity-70 flex items-center justify-center rounded-lg">
                      <span className="text-white text-xl">Click to view full page</span>
                    </div>
                  </a>
                </div>
              )))}


            </div>
          </div>

          {/* Section 3 */}
          <div className='flex justify-center px-6 mt-2'>
            <div className='w-[70%] sm:w-[100%]'>
              <h2 class="text-lg font-bold mb-4 decoration-8">Links Section</h2>

              <div>
                <h2 class="text-lg font-bold mb-2 decoration-1">Live Links</h2>
                {live_links.length === 0 ? (
                  <div class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                    <a target="_blank" class="text-blue-600 hover:underline my-3"></a>
                    <p className='opacity-75'>No Link</p>
                  </div>
                ) : (
                  live_links.map((data, index) => (
                    <div key={index} class="flex w-[95%] border-2 py-2 px-3 rounded-lg bg-white mb-2">
                      <div class="max-w-full overflow-hidden">
                        <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                      </div>
                    </div>

                  )))}
              </div>


              <div>
                <h2 class="text-lg font-bold mb-2 decoration-1">General Links</h2>
                {general_links.length === 0 ? (
                  <div class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                    <a target="_blank" class="text-blue-600 hover:underline my-3"></a>
                    <p className='opacity-75'>No Link</p>
                  </div>
                ) : (general_links.map((data, index) => (
                  <div key={index} class="flex w-[95%] border-2 py-2 px-3 rounded-lg bg-white mb-2">
                    <div class="max-w-full overflow-hidden">
                      <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                    </div>
                  </div>
                )))}
              </div>

              <div>
                <h2 class="text-lg font-bold mb-2 decoration-1">Chanel Links</h2>
                {chanel_links.length === 0 ? (
                  <div class="flex w-[95%] h-min-[45px] h-max-auto border-2 py-2 px-3 rounded-lg bg-white mb-2">
                    <a target="_blank" class="text-blue-600 hover:underline my-3"></a>
                    <p className='opacity-75'>No Link</p>
                  </div>
                ) : (
                  chanel_links.map((data, index) => (
                    <div key={index} class="flex w-[95%] border-2 py-2 px-3 rounded-lg bg-white mb-2">
                      <div class="max-w-full overflow-hidden">
                        <a href={data} target="_blank" class="text-blue-600 hover:underline">{data}</a>
                      </div>
                    </div>
                  ))
                )}
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