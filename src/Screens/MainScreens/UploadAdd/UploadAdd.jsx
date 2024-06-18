import React, { useEffect, useState } from 'react'
import './UploadAdd.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import AdvertisingComponents from '../../../Components/Funca/AdvertisingComponents'
import { Button } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPlanInfo } from '../../../utils/APIcall'
import { useLocation } from 'react-router-dom'
import { showToastMessage_warn } from '../../../shared/Toaster'
import Loading from '../../../utils/Loadings/Loading'
import RightTrue from './RightTrue'
import WrongFalse from './WrongFalse'
import { ShareModel } from '../../../utils/ShareModel'
import { GiftCard } from './GiftCard'
import PaymentScreen from '../../../Components/Razorpay/Razorpay'
import { setToken } from '../../../redux/actions/loginAction'
function UploadPage() {
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);
  const [currentURl, setCurrentURl] = useState(true);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleImageOpenModal = () => {

    setIsGiftModalOpen(true);
  };

  const handleGiftCloseModal = () => {
    setIsGiftModalOpen(false);
  };

  const handleGiftSubmit = async () => {


  };
  const openShareModel = () => {
    setIsShareModelOpen(true);
  };

  useEffect(() => {

    const ApiCaller = async () => {
      try {
        const res = await GetPlanInfo(token)

        if (res) {
          console.log("res dataaaaa>>", res.data)




          try {
            setPlanDataView(res.data.data)
            setTimeout(() => {
              console.log(">>>>123456", planDataView, ">>>>", res.data.data)
            }, 200)
          } catch (error) {
            console.log(error);
            if (error.response) {
              if (error.response.status === 401) {
             
              } else if (error.response.status === 404) {
                showToastMessage_warn('User Not Found')
                dispatch(setToken(""));
                // dispatch(setToken(""));
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
              } else if (error.response.status === 500) {
                // toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER })
                showToastMessage_warn('Internal server error')
                dispatch(setToken(""));
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
              } else {
                showToastMessage_warn('An error occurred during .')
              }
            } else if (error.request) {
              showToastMessage_warn('No response received from the server.')
           
            } else {
              showToastMessage_warn('Error setting up the request.')
            }
          }


          // SetPlanData(res.data)
          // console.log("Data Page >>", PlanData)
          // console.log(">>>",PlanData)
          // SetBenefitsData(res.data.benefits)
          // console.log("benefits>>>>>>", benefitsData)
        }


      } catch (e) {
        console.log(e)

        console.error('Error fetching data', error);

      }
      finally {
        console.log("API Call Finished .")
        setIsLoading(false)
      }
    }

    ApiCaller()

  }, [])

  const closeShareModel = () => {
    setIsShareModelOpen(false);
  };
  useEffect(() => {
    const currentUrl = window.location.href;
    setCurrentURl(currentUrl)
  }, [])

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
  const [PlanData, SetPlanData] = useState([])
  const [planDataView, setPlanDataView] = useState([ {
    "_id": "665088970b8b0a538e79fa6d",
    "PlanName": "test",
    "Duration": 30,
    "timesInADay": 25,
    "Description": "test",
    "PlanPrize": 1,
    "PlanPic": "/planPics/1716553879597.jpg",
    "addDuration": 20,
    "benefits": [
        {
            "_id": "66541da7bdb2d9fd2b2098fe",
            "plans": "665088970b8b0a538e79fa6d",
            "name": "30 days",
            "status": true,
            "createdAt": "2024-05-27T05:44:07.763Z",
            "updatedAt": "2024-05-27T05:44:07.763Z",
            "__v": 0
        }
    ],
    "createdAt": "2024-05-24T12:31:19.613Z",
    "updatedAt": "2024-05-27T05:44:07.808Z",
    "__v": 1
},])

  const token = useSelector((state) => state.token);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);



  // Check if there's a state with a message
  if (location.state && location.state.message) {
    showToastMessage_warn(location.state.message);
  }
  const dataRes = [
    {
      "_id": "665088970b8b0a538e79fa6d",
      "PlanName": "test",
      "Duration": 30,
      "timesInADay": 25,
      "Description": "test",
      "PlanPrize": 1,
      "PlanPic": "/planPics/1716553879597.jpg",
      "addDuration": 20,
      "benefits": [
        {
          "_id": "66541da7bdb2d9fd2b2098fe",
          "plans": "665088970b8b0a538e79fa6d",
          "name": "30 days",
          "status": true,
          "createdAt": "2024-05-27T05:44:07.763Z",
          "updatedAt": "2024-05-27T05:44:07.763Z",
          "__v": 0
        }
      ],
      "createdAt": "2024-05-24T12:31:19.613Z",
      "updatedAt": "2024-05-27T05:44:07.808Z",
      "__v": 1
    },
    {
      "_id": "66541d6fbdb2d9fd2b2098a3",
      "PlanName": "test 2",
      "Duration": 40,
      "timesInADay": 30,
      "Description": "test 2",
      "PlanPrize": 2,
      "PlanPic": "/planPics/1716788591388.jpg",
      "addDuration": 25,
      "benefits": [
        {
          "_id": "66541d7ebdb2d9fd2b2098ba",
          "plans": "66541d6fbdb2d9fd2b2098a3",
          "name": "40 days",
          "status": true,
          "createdAt": "2024-05-27T05:43:26.790Z",
          "updatedAt": "2024-05-27T05:43:26.790Z",
          "__v": 0
        },
        {
          "_id": "66542070bd7cd24b8a8d1725",
          "plans": "66541d6fbdb2d9fd2b2098a3",
          "name": "30 times in a day",
          "status": true,
          "createdAt": "2024-05-27T05:56:00.492Z",
          "updatedAt": "2024-05-27T05:56:00.492Z",
          "__v": 0
        }
      ],
      "createdAt": "2024-05-27T05:43:11.427Z",
      "updatedAt": "2024-05-27T05:56:00.543Z",
      "__v": 2
    }
  ]






  let imagesBe = [
    { name: "hero1", Type: 'Free Add', ImageLink: '/images/icons2/Rectangle 552.png' },
    { name: "hero1", Type: 'Paid Add', ImageLink: '/images/icons2/Rectangle 553.png' },
    { name: "hero1", Type: 'Gift Add', ImageLink: '/images/icons2/Rectangle 554.png' }
  ]

  let Plan = [
    { PlanName: 'Basic', price: '300', duration: '6 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { PlanName: 'Personal', price: '500', duration: '12 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { PlanName: 'Business', price: '1000', duration: '24 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ]

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='h-auto'>

      <div className='h-[70px]'>
      </div>

      <div className=' w-full flex justify-center mt-8'>
        <div className='w-[70vw] h-[auto]'>
          {/* <div className='grid grid-cols-4 md:grid-flow-col-3 sm:grid-cols-2 gap-8 gap-y-3'>

            <CustomButton
              onClick={() => { openShareModel() }}
              classStyle='text-blue-950 font-bold text-xs'
            // Linkurl='/Share'
            >
              Share <img src='/images/icons2/Frame.png' className='inline ps-2' />
            </CustomButton>


            <ShareModel isOpen={isShareModelOpen} onClose={closeShareModel} onSubmit={handleShare} linkData={currentURl} />
            <a href='/Create Page' classStyle='text-blue-950 font-bold text-xs '>


              <CustomButton
                classStyle='text-blue-950 font-bold text-xs '
                Linkurl='/Add'
              >
                Add <img src='/images/icons2/Vector.png' className='inline ps-2' />
              </CustomButton>
            </a>

            <a href='Home'>
              <CustomButton
                classStyle='text-blue-950 font-bold text-xs'
                Linkurl='/Pink'
              >
                cancel
              </CustomButton>
            </a>
          </div> */}




        </div>
      </div>


      <div className='mx-[80px] sm:mx-[10px] my-9'>
        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Upload Ads</h1>
          {/* <div className='mt-5'>
            <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-center'>
              {PlanData.length === 0 ? (
                <div className="text-center my-2 font-bold text-base">No data found</div>
              ) : (
                PlanData.map((Data, index) => (
                  <div key={index}>
                    <div className="text-center my-2 font-bold text-base">{Data.Type}</div>
                    <img src={Data.PlanPic} alt={`Plan ${index}`} />

                  </div>
                ))
              )}

            </div>
            <div className='text-center tracking-[3.00px] my-5 w-full'><button className='bg-blue-800 px-8 py-3 rounded-lg text-white font-bold leading-31 tracking-5'>Select Free Ads Option </button></div>
          </div> */}
        </div>

        {/* section 2 */}
        <div className='grid grid-cols-6 sm:grid-cols-2 my-10 gap-10 '>
          <div className='col-span-2 sm:col-span-9 '>
            <div className='flex flex-col items-start  border-b border-r p-[40px] mx-5'>
              <a href='Own%20Status'>

                <CustomButton classStyle={'my-3 bg-white h-auto'}>Upload my page</CustomButton>
              </a>
              <a href="/Create Page">

                <CustomButton classStyle={'my-3 bg-white h-auto'}>Add ads links</CustomButton>
              </a>
              {/* <GiftCard isOpen={isShareModelOpen} onClose={closeShareModel} onSubmit={handleShare} linkData={currentURl} /> */}

              <CustomButton classStyle={'my-3 bg-white h-auto'} onClick={() => { handleImageOpenModal() }}>Gift Ads</CustomButton>
              {/* <CustomButton classStyle={'my-3 bg-white h-auto'}>Delete</CustomButton> */}
              {/* <GiftCard */}

              <GiftCard isOpen={isGiftModalOpen} onClose={handleGiftCloseModal} onSubmit={handleGiftSubmit} />

            </div>
          </div>

          <div className='col-span-4 sm:col-span-10 sm:ms-10 '>
            <div className='w-full h-full flex  items-center'>
              <div className='backGroundGradinatecss w-full xl:h-auto rounded-xl flex flex-col py-10 justify-center items-center max-w-[80%] max-h-[100%]'>
                <a href='/Create Page'>
                  <CustomButton classStyle={'my-4 bg-white font-bold'}>My page</CustomButton>
                </a>

                <a href='/Add Page'><CustomButton classStyle={'my-4 bg-white font-bold'}>Add page</CustomButton></a>
                <a href='/Create Page'><CustomButton classStyle={'my-4 bg-white font-bold'}>Add the adds</CustomButton></a>
              </div>
            </div>
          </div>
        </div>

        {/* 3nd Section */}
        <div className='grid grid-row-2'>
          <h2 className='text-center font-bold text-2xl leading-31 tracking-5 my-5'>Choose a plan that’s right for you</h2>

          <div className='grid grid-cols-3 sm:grid-cols-1 ,mdl:grid-cols-2 w-full  gap-7 justify-center'>
            {planDataView.length === 0 ? (
              <div className='text-center text-black font-bold'>No plans available</div>
            ) : (planDataView.map((data, index)=>(
              <div key={index} className='h-[500px] rounded-3xl'>
                <div className='backGroundGradinateForprimenrm p-5 w-full h-full rounded-3xl'>
                  <div className='flex justify-center items-center'>
                    <div className=' text-white text-center pb-3 border-b-2 border-r-pink-800 font-bold w-[50%]'>
                      {data.PlanName}
                    </div>
                  </div>

                  <div className='text-white text-center mt-5'>
                    <div className='font-bold text-3xl'>{data.PlanPrize} ₹</div>
                    {/* <div className='text-sm font-normal my-2'>{data.Duration}</div> */}
                    <div className='text-lg mt-4'>{data.Description}</div>
                  </div>

                  <div className='text-white text-center mt-5'>
                    <div className='my-6'>
                      {data.benefits.length > 0 ? (
                        data.benefits.map((item, index) => (
                          item.status ? <RightTrue benefitsName={item.name} key={index} /> : <WrongFalse benefitsName={item.name} key={index} />
                        ))
                      ) : (
                        <p>No benefits available</p>
                      )}
                    </div>
                  </div>
                  <div className='flex justify-center'>

                    <PaymentScreen planId={data._id}></PaymentScreen>
                    </div>
                </div>
              </div>
            )))}
          </div>

        </div>
      </div>
      <AdvertisingComponents />
    </div>
  )
}

export default UploadPage