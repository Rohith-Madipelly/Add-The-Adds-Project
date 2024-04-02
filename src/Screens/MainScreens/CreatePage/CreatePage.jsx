import React, { useEffect, useState } from 'react'
import './CreatePage.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import '../Home/Home.css'
import NDShare from '../../../Components/NavBar/NavDropDown/NDShare'
import { useSelector } from 'react-redux'
import { ProfileAPI } from '../../../utils/APIcall'
import { MdDelete } from 'react-icons/md'
import { IoAddCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import LinksDisplay from '../../../Components/LinksDisplay'
import LinkCreatePage from './LinkCreatePage'
function CreatePage() {
  const [LinkList, setLinkList] = useState([{ service: "" }]);
  const [Data, setData] = useState("")

  const token = useSelector((state) => state.token);

  const Apicaller = async () => {
    console.log(token)
    const res = await ProfileAPI(token)
    //   console.log(res.data)
    // console.log(res.data.user.pagename)
    setData(res.data.user)
  }
  useEffect(() => {
    Apicaller()
  }, [])




  let NavDropsOption = [
    // { name: "My Page", link: "/My Page" },
    // { name: "Share", link: "/Share" },
    // { name: "Share Add Link", link: "/Share Add Link" },
    // { name: "Page Add", link: "/Page Add" },
    // { name: "Save", link: "/Save" },
    // { name: "Upload New", link: "/Upload New" },
    // { name: "Delete", link: "/Delete" }
  ];

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...LinkList];
    list[index][name] = value;
    setLinkList(list);
  };
  const handleServiceRemove = (index) => {
    const list = [...LinkList];
    list.splice(index, 1);
    setLinkList(list);
  };

  const handleServiceAdd = () => {
    setLinkList([...LinkList, { service: "" }]);
  };


  return (
    <div className='new_Page_GroundImage'>
      <div className='h-[70px]'>

      </div>

      <div className='w-full px-8 sm:px-2 py-5'>

        <div className='grid grid-cols-12 '>
          <div className='sm:col-span-3'><div className='hidden sm:block'><NDShare /></div></div>
          <div className='col-span-12 sm:col-span-9'><div className='font-bold text-xl mb-5 text-center sm:text-start'>Create a new Page </div>
          </div>
        </div>

        <div className='flex justify-center items-center w-[100%]'>
          {/* Section 1 */}
          <div className='grid grid-flow-col grid-cols-8 w-full m-5 sm:m-0'>
            <div className='col-span-2 bg-red border-b border-r p-[40px] mx-5 sm:hidden'>
              {NavDropsOption.map((Data) => (
                <Link to={Data.link}><CustomButton classStyle={'mt-2 bg-white h-auto'}>{Data.name}</CustomButton></Link>
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
        <div className='my-5 flex justify-center'>
          <div className='w-[60%] sm:w-[95%]'>
            {/* {Data?<LinksDisplay DataLinks={Data}/>:""} */}
     <LinkCreatePage/>
          </div>
          </div>
      

      </div>
    </div>
  )
}

export default CreatePage