import React, { useEffect, useState } from 'react'
import './CreatePage.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import '../Home/Home.css'
import NDShare from '../../../Components/NavBar/NavDropDown/NDShare'
import { useSelector } from 'react-redux'
import { Add_Image_In_HeadersAPI, Add_Video_In_HeadersAPI, ProfileAPI } from '../../../utils/APIcall'
import { MdDelete } from 'react-icons/md'
import { IoAddCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import LinksDisplay from '../../../Components/LinksDisplay'
import LinkCreatePage from './LinkCreatePage'
import CarouselComponent from './CarouselComponent'
import { YouTubeModal } from './YouTubeModel'
import { ImageUploadModel } from './ImageUploadModel'
import { showToastMessage_error, showToastMessage_success } from '../../../shared/Toaster'
function CreatePage() {
  const [LinkList, setLinkList] = useState([{ service: "" }]);
  const [Data, setData] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = useSelector((state) => state.token);

  const Apicaller = async () => {
    console.log(token)
    const res = await ProfileAPI(token)
    //   console.log(res.data)
    // console.log(res.data.user.pagename)
    console.log("shajsh", res.data)
    setData(res.data)
    console.log("da", Data.likes)

  }
  useEffect(() => {
    Apicaller()
  }, [])





  const handleOpenModal = () => {
    console.log("asjbja")
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
      setTimeout(() => {
        Apicaller()
      }, 200)


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
      console.log(res.data.message)
      console.log(res.data)

      showToastMessage_success(res.data.message)

      window.location.reload();



    } catch (e) {
      console.log("error", e)
      showToastMessage_error('Error setting up the request.')
    }
    finally {

    }

  };




  return (
    <div className='new_Page_GroundImage'>
      <div className='h-[70px]'></div>

      <div className='w-full px-8 sm:px-2 py-5'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-9'><div className='font-bold text-xl mb-5 text-center sm:text-start'>Create a new Page </div>
          </div>
        </div>

        <div className='my-5 flex justify-center'>
          <div className='w-[60%] sm:w-[95%]'>


            <div className=''>
              <CarouselComponent data={Data} />
              <div className='my-4  flex justify-end'>
                <div className='grid grid-flow-col gap-2 sm:w-[90vw]'>
                  <CustomButton classStyle={'my-3 bg-white h-auto'}>
                    {Data.likes} Likes
                  </CustomButton>
                  <CustomButton classStyle={'my-3 bg-white h-auto'}>{Data.views} Views</CustomButton>
                  <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handleOpenModal() }}>Upload Video </CustomButton>
                  <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handleImageOpenModal() }}>Image</CustomButton>
                  <YouTubeModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />

                  <ImageUploadModel isOpen={isImageModalOpen} onClose={handleImageCloseModal} onSubmit={handleImageSubmit} />
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className='my-5 flex justify-center'>
          <div className='w-[60%] sm:w-[95%]'>
            {/* {Data?<LinksDisplay DataLinks={Data}/>:""} */}
            <LinkCreatePage />
          </div>
        </div>


      </div>
    </div>
  )
}

export default CreatePage