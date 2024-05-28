import React, { useEffect, useState } from 'react'
import './UploadAdd.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import AdvertisingComponents from '../../../Components/Funca/AdvertisingComponents'
import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { GetPlanInfo } from '../../../utils/APIcall'
import { useLocation } from 'react-router-dom'
import { showToastMessage_warn } from '../../../shared/Toaster'
import Loading from '../../../utils/Loadings/Loading'
import RightTrue from './RightTrue'
import WrongFalse from './WrongFalse'
import { ShareModel } from '../../../utils/ShareModel'
import { GiftCard } from './GiftCard'
import PaymentScreen from '../../../Components/Razorpay/Razorpay'
function UploadPage() {
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);
  const [currentURl, setCurrentURl] = useState(true);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

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
  const [planDataView, setPlanDataView] = useState([])

  const token = useSelector((state) => state.token);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  // Check if there's a state with a message
  if (location.state && location.state.message) {
    // Show toaster notification with the message
    showToastMessage_warn(location.state.message);
  }


  useEffect(() => {
    let isMounted = true;
    const ApiCaller = async () => {
      try {
        const res = await GetPlanInfo(token)

        if (res) {
          console.log("res dataaaaa>>", res.data)

          if (isMounted) {
            setPlanDataView(res.data)
          setTimeout(() => {
            console.log(">>>>123456", planDataView)
          }, 200)
          }
          

          // SetPlanData(res.data)
          // console.log("Data Page >>", PlanData)
          // console.log(">>>",PlanData)
          // SetBenefitsData(res.data.benefits)
          // console.log("benefits>>>>>>", benefitsData)
        }


      } catch (e) {
        console.log(e)
        if (isMounted) {
          console.error('Error fetching data', error);
        }
      }
      finally {
        console.log("API Call Finished .")
        setIsLoading(false)
      }
    }

    ApiCaller()

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false if the component unmounts
    };
  }, [])





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

                <CustomButton classStyle={'my-3 bg-white h-auto'}>Upload My Page</CustomButton>
              </a>
              <a href="/Create Page">

                <CustomButton classStyle={'my-3 bg-white h-auto'}>Add Ads Links</CustomButton>
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
                  <CustomButton classStyle={'my-4 bg-white font-bold'}>My Page</CustomButton>

                </a>
                <a href='/Add Page'><CustomButton classStyle={'my-4 bg-white font-bold'}>Add Page</CustomButton></a>
                <a href='/Create Page'><CustomButton classStyle={'my-4 bg-white font-bold'}>Add The Adds</CustomButton></a>
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
            ) : (

              // planDataView.map((data, index) => (
    
              // ))

               <div></div>
            )}



            {/* {planDataView.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))} */}




          </div>

        </div>
      </div>
      <AdvertisingComponents />
    </div>
  )
}

export default UploadPage