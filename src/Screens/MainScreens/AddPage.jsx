import React, { useEffect, useState } from 'react'
import CustomButton from '../../Components/UI/Button/CustomButton'
import TextInputCustom from '../../Components/UI/Input/TextInputCustom'
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import NDShare from '../../Components/NavBar/NavDropDown/NDShare';
import { ProfileAPI } from '../../utils/APIcall';
import { useSelector } from 'react-redux';
import LinksDisplay from '../../Components/LinksDisplay';
function AddPage() {
  const [LinkList, setLinkList] = useState([{ service: "" }]);
  const token = useSelector((state) => state.token);
  const [Data, setData] = useState("")



  const Apicaller = async () => {
    console.log(token)
    const res = await ProfileAPI(token)
    setData(res.data.user)
  }


  useEffect(() => {
    Apicaller()
  }, [])



  const handleServiceAdd = () => {
    setLinkList([...LinkList, { service: "" }]);
  };


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
    <div className='w-full px-8 new_Page_GroundImage'>
      <div className='h-[70px]'>

      </div>
      <div className='grid grid-cols-12 py-4'>
        <div className='sm:col-span-3'><div className='hidden sm:block'><NDShare /></div></div>
        <div className='col-span-12 sm:col-span-9'><div className='font-bold text-xl mb-2 text-center sm:text-start'>Add Page </div>
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
      <div className='w-[100%] mt-10 mx-10 gap-1 gap-y-2 grid grid-flow-col grid-col-2 sm:grid-rows-2 sm:mx-0'>
        <div><img src='/images/123.png' /></div>
        <div><img src='/images/123.png' /></div>
      </div>



      {/* Section 3 */}
      <div className='my-5 flex justify-center'>
        <div className='w-[70%] sm:w-[100%]'>
          <div>
            {Data ? <LinksDisplay DataLinks={Data} /> : ""}
          </div>


          <div className='flex justify-center mt-5'>
            <button className='rounded-lg bg-blue-600 items-center p-3 py-2 m-2 w-52 text-white uppercase' onClick={() => { console.log(">>>", LinkList) }} >Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPage