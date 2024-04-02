import React from 'react'
import NavBar from '../Components/NavBar/Navbar'
import './css/Home.css'
import Image1 from '../../public/images/img_rectangle_1.png'
import BackgroundComponent from '../Components/BackgroundComponent'
import { Carousel, Footer } from 'flowbite-react'
import AddComponent from '../Components/AddComponent'
import Footter from '../Components/Footter'
import { Navigate } from 'react-router-dom'
function Home() {

  let tryOptions = [
    { name: "Own Status", imageLink: "images/img_rectangle_2.png" },
    { name: "Create Page", imageLink: "images/img_rectangle_6.png" },
    { name: "Add Page", imageLink: "images/img_rectangle_7.png" },
    { name: "Upload Add", imageLink: "images/img_rectangle_8.png" },

  ]


  return (
    <div>
      <div className='px-2'>
        <div className=''>


          {/* search here box */}
          <div className="w-full relative bg-black">
            <img
              src="images/img_rectangle_1.png"
              alt="image"
              className="justify-center h-[330px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
            />
            <input
              name="search"
              placeholder="Search here"
              // value={searchBarValue}
              // onChange={(e) => setSearchBarValue(e)}
              suffix={
                //   searchBarValue?.length > 0 ? (
                // <CloseSVG
                //   onClick={() => setSearchBarValue("")}
                //   height={30}
                //   width={30}
                //   fillColor="#000000ff"
                // />
                //   ) : (
                <img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                //   )
              }
              className="flex items-center justify-center w-[40%] sm:w-[80%] h-[50px] gap-[35px] left-0 bottom-0 right-0 top-0 px-[40px] m-auto text-black-900_cc tracking-[1.00px] font-outfit text-xl bg-white-A700 shadow-sm absolute rounded-[10px] z-0"
            />

            <img
              src="images/img_group_290.png"
              alt="image_one"
              className="w-[1440px] opacity-0.5 object-cover z-0"
            />

          </div>
        </div>
        <img
          src="images/img_vector_1.png"
          alt="vectorone_one"
          className="h-[1329px] w-[19%] bottom-[2%] top-[500px] right-0 m-auto object-cover absolute z-0 sm:hidden"
        />
        {/* <BackgroundComponent /> */}
        <div className="flex flex-col items-start justify-start gap-4 z-10 mt-10">
          <p size="s" as="p" className="!text-black-900 tracking-[1.20px] italic">
            You might want to try...
          </p>
          <div className="flex flex-row justify-start w-full mb-10">

      
            <div className="flex flex-row w-full gap-6 sm:gap-2 grid-flow-col auto-col-fr z-10 h-auto mb-10 bg-black">
              {
                tryOptions.map((Data) => (
                  <div className=" w-[24%]  sm:w-[60%] sm:h-[150px]  relative " >
                    <img
                      src={Data.imageLink}
                      alt="own_status_one"
                      className="justify-center h-[172px] sm:h-[140px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[21px]"
                    />
                    <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 px-0 py-[72px] sm:py-[55px] m-auto bg-gray-800_33 absolute rounded-[21px]">
                      <h5 as="h2" className=" tracking-[1.00px] italic text-white">
                        {Data.name}
                      </h5>
                    </div>
                  </div>
                ))
              }
            </div>


          </div>
          <div className='justify-center items-center m-auto'>
            <div className='boxarea'>
              <h1 className='item-center'>GET A PLAN BECOME A CUSTOMER</h1>
              <div className='h-[645px] w-[644px] sm:w-[90vw] sm:h-[50vh] bg-black relative flex justify-center'>

                <div className='bg-white items-center justify-center left-1 right-1 bottom-0 absolute h-20 item-center w-[120px] p-4'>
                  Add the Adds
                </div>
                <Carousel
                // leftControl="left" 
                // rightControl="right"
                >{
                    tryOptions.map((Data) => (
                      <img
                        src={Data.imageLink}
                        alt="own_status_one"
                        className="justify-center w-full  object-cover  rounded-[21px]"
                      />
                    ))
                  }</Carousel>

              </div>
            </div>

          </div>
          <div className=' w-[100%] sm:h-[30vh] h-[30vh] overflow-hidden'>
            <AddComponent imageUrl={'images/img_rectangle_532.png'} />
          </div>


        </div>

      </div>
      {/* <div className='h-[240px] sm:h-0'>

      </div> */}
      <Footter />
    </div>

  )
}

export default Home