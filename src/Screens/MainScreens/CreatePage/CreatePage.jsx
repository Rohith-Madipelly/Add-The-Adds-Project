import React, { useEffect, useState } from 'react'
import './CreatePage.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import '../Home/Home.css'

import LinkCreatePage from './LinkCreatePage'
import CarouselComponent from './CarouselComponent'
import { YouTubeModal } from './YouTubeModel'
import { ImageUploadModel } from './ImageUploadModel'
import { DeleteHeadersModel } from './DeleteHeadersModel'

import { AddPagetoUser } from './AddPagetoUser'

import { useSelector } from 'react-redux'
import { MdDelete, MdThumbUp } from 'react-icons/md'

import { Link, useLocation } from 'react-router-dom'
import { Add_Image_In_HeadersAPI, Add_Video_In_HeadersAPI, DeleteHeadersAPI, LIKEAPI, ProfileAPI } from '../../../utils/APIcall'
import { showToastMessage_error, showToastMessage_success, showToastMessage_warn } from '../../../shared/Toaster'



import Loading from '../../../utils/Loadings/Loading'
function CreatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState("")
  const [userPage, setUserPage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerData, setHeadersData] = useState([])
  const [Like, setLike] = useState(1)
  const [liked, setLiked] = useState(false);


  const token = useSelector((state) => state.token);
  const location = useLocation();

  // Check if there's a state with a message
  if (location.state && location.state.message) {
    // Show toaster notification with the message
    showToastMessage_warn(location.state.message);
  }


  const Apicaller = async () => {
    setIsLoading(true)

    try {
      const res = await ProfileAPI(token)

      if (res.status===200) {
        const ResData = await res.data;
        console.log(">>>>", res.data)

        setUserPage(res.data.pagename)
        setData(res.data)
        
        console.log("<><><>", res.data)
        
        setLiked(res.data.isLiked)
        setHeadersData(ResData.ownHeaders)
        if (ResData.ownHeaders.length === 0) {
          showToastMessage_warn("No Data Found, You can add here");
        }
 
        setLike(res.data.likes)


        setTimeout(()=>{
          likesData=Data.likes;
          setLike(likesData)
        },500)
        
        // setTimeout(()=>{
         
        //   if(likesData!=1)
        //   {
        //     setLike(likesData)
        //   }else{
        //     setLike(1)
        //   }
        // },500)

      
      }
    }
    catch (e) {
      console.log(e);
    }
    finally {
      setIsLoading(false)
    }


  }
  useEffect(() => {
    Apicaller()
  }, [])





  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (youtubeUrl) => {
    // You can do something with the YouTube URL here
    console.log('Submitted YouTube URL:', youtubeUrl);
    setIsModalOpen(false);
    try {
      const res = await Add_Video_In_HeadersAPI(token, youtubeUrl)
      console.log(res.data.message)
      showToastMessage_success(res.data.message)

      window.location.reload();

    } catch (e) {
      console.log(e)
      showToastMessage_error('Error setting up the request.')
    }
    finally {

    }
  };



  // Image models
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageOpenModal = () => {
    handleImageOpenModal
    setIsImageModalOpen(true);
  };

  const handleImageCloseModal = () => {
    setIsImageModalOpen(false);
  };

  const handleImageSubmit = async (imageFile) => {
    // You can do something with the image file here
    console.log('Submitted image file:', imageFile);
    setIsImageModalOpen(false);

    try {
      const res = await Add_Image_In_HeadersAPI(token, imageFile)
      if (res) {

        console.log(res.data.message)
        console.log(res.data)
        showToastMessage_success(res.data.message)

        window.location.reload();
      }

    } catch (e) {
      console.log("error", e)
      showToastMessage_error('Error setting up the request.')
    }
    finally {

    }

  };

  ;



  // Image models
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);

  const handlePageOpenModal = () => {
    // handlePageOpenModal
    setIsPageModalOpen(true);
  };

  const handlePageCloseModal = () => {
    setIsPageModalOpen(false);
  };

  const handlePageSubmit = async () => {
    setIsPageModalOpen(false);
  };

  ;


  // delete Headers Links

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteOpenModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
  };


  const handleDeleteSubmit = async () => {
    setIsDeleteModalOpen(false);
    window.location.reload();
  };


  const toggleLike = () => {
    // setLiked(!liked);
    LikeAPICall()
  }

  const LikeAPICall = async () => {
    try {
      const res = await LIKEAPI(token, userPage)
      if (res) {
        // setLiked(!liked);

        if (res.data.message === "liked") {
          setLiked(true)
          // const previousValue = Like;
          setLike(previousValue => previousValue + 1);
        }
        else {
          console.log(Like)

          if (Like === 0) {
            setLike(0)
          } else {
            setLike(previousValue=>previousValue - 1)
          }
          setLiked(false)
        }

      }
    } catch (e) {


      console.log("Error in Likes API", e)
    } finally {

    }
  }
  if (isLoading) {
    return <Loading />
  }


  return (
    <div className=' w-full   new_Page_GroundImage'>
      <div className='h-[70px]'></div>

      {/* <div className='w-full  py-3'> */}

        <div className='grid grid-cols-12 sm:px-1'>
          <div className='col-span-12 sm:col-span-12'>
            <div className='font-bold text-xl mb-5 text-center sm:text-center'>  Hey {Data.pagename ? Data.pagename.charAt(0).toUpperCase() + Data.pagename.slice(1) : ''}! Create Your Page Here</div>
          </div>
        </div>



        <div className=' flex justify-center'>
          <div className='w-[60%] mdl-w-[70%]  sm:w-[160%] h-[450px] sm:h-[350px]'>

            {/* Carsousel Section */}
            <CarouselComponent data={Data} />

            <div className='my-4 flex justify-between sm:flex-col  mdl:flex-col'>
              <div className='grid grid-flow-col gap-2    sm:text-xs'>
                <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={toggleLike}>
                  {liked ? <MdThumbUp color="blue" size={25} /> : <MdThumbUp size={25} />}
                  <p className='ms-2'>{Like} Likes</p>
                </CustomButton>

                <CustomButton classStyle={'my-3 bg-white h-auto'}>{Data.views} Views</CustomButton>

                <CustomButton classStyle={'my-3 bg-white h-auto me-2'} onClick={() => { handleDeleteOpenModal() }}>
                  Delete Content
                </CustomButton>

                <YouTubeModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />

                <ImageUploadModel isOpen={isImageModalOpen} onClose={handleImageCloseModal} onSubmit={handleImageSubmit} />

                <AddPagetoUser isOpen={isPageModalOpen} onClose={handlePageCloseModal} onSubmit={handlePageSubmit} />

                <DeleteHeadersModel datares={headerData} isOpen={isDeleteModalOpen} onClose={handleDeleteCloseModal} onSubmit={handleDeleteSubmit} />
              </div>

              <div className='grid grid-flow-col gap-2 sm:text-xs'>
                <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handleOpenModal() }}>
                  Upload Video
                </CustomButton>
                <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handleImageOpenModal() }}>
                  Image
                </CustomButton>
                <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handlePageOpenModal() }}>
                  Upload Ads
                </CustomButton>
              </div>
            </div>

          </div>
        </div>

        {/* section 3 */}
        <div className='flex justify-center mt-5'><p>Add Your Links</p></div>
        <div className='my-5 flex justify-center item-center'>
          <div className='w-[60%] sm:w-[90%]'>
            <LinkCreatePage />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default CreatePage