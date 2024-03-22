import React, { useState } from 'react'
import CustomButton from '../../Components/UI/Button/CustomButton'
import TextInputCustom from '../../Components/UI/Input/TextInputCustom'
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import NDShare from '../../Components/NavBar/NavDropDown/NDShare';
function AddPage() {
  const [LinkList, setLinkList] = useState([{ service: "" }]);


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


            {LinkList.map((singleService, index) => (
              <div key={index} className="services flex justify-center">
                <div className='flex flex-col w-[100%] '>
                  <p className='my-2'>Live Links</p>
                  <div className='flex w-[95%] border-2 rounded-lg bg-white h-[55px]'>
                    <input
                      name="service"
                      type="text"
                      id="service"
                      value={singleService.service}
                      onChange={(e) => handleServiceChange(e, index)}
                      required
                      className='border-none focus:outline-none focus:border-none w-full h-[50px]' />
                    <div>
                      <IoAddCircleSharp size={25} color='blue' className='m-3' onClick={handleServiceAdd} />
                    </div>
                    <div className='m-3'>
                      <MdDelete size={25} color='red' onClick={() => handleServiceRemove(index)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {LinkList &&
                    LinkList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))}

          <div className='flex justify-center mt-5'>
            <button className='rounded-lg bg-blue-600 items-center p-3 py-2 m-2 w-52 text-white uppercase'onClick={()=>{console.log(">>>",LinkList)}} >Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPage