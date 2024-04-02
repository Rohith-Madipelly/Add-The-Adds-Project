import React from 'react';
import { ProfileAPI } from '../utils/APIcall';
import { useSelector } from 'react-redux';

const LinksDisplay = ({ DataLinks }) => {
  console.log("sda", DataLinks)

  const token = useSelector((state) => state.token);
  const [Data, setData] = useState("")



  const Apicaller = async () => {
    // console.log(token)
    // const res = await ProfileAPI(token)
    // setData(res.data.user)
    console.log("Data Save in State")
  }


  useEffect(() => {
    Apicaller()
  }, [])

  return (
    <div>

      <h1 className='text-lg '>Live Links:</h1>
      <div className='flex w-[95%] border-2 rounded-lg bg-white h-[60px]'>
        <ul className='ms-5'>
          {DataLinks.link.live_links.map((liveLink, index) => (
            <li key={index} ><a href={liveLink} target='blank'>{liveLink}</a></li>
          ))}
        </ul>
      </div>

      <h1 className='text-lg mt-5'>General Links:</h1>
      <div className='flex w-[95%] border-2 rounded-lg bg-white h-[60px]'>
        <ul className='ms-5'>
          {DataLinks.link.general_links.map((generalLink, index) => (
            <li key={index}><a href={generalLink} target='blank'>{generalLink}</a></li>
          ))}
        </ul>
      </div>

      <h1 className='text-lg mt-5'>Channel Links:</h1>
      <div className='flex w-[95%] border-2 rounded-lg bg-white h-[60px]'>
        <ul className='ms-5'>
          {DataLinks.link.chanel_links.map((channelLink, index) => (
            <li key={index}><a href={channelLink} target='blank'>{channelLink}</a></li>
          ))}
        </ul>
      </div>
      <div className='my-4'>

        <label htmlFor="Live Link">User Page Link</label>
        <div className=' gap-5 my-4 grid grid-cols-2 sm:grid-cols-1 '>
          <div className='flex'>
            <div><img className='flex w-[400px] h-[140px] overflow-hidden rounded-lg' src='/images/AuthBanner/123.jpeg'></img></div>
          </div>
          <div className='flex'>
            <div className='w-[400px] h-[140px] overflow-hidden rounded-lg text-center flex justify-center place-items-center  bg-white border border-2'>

              {DataLinks ? <div >{DataLinks.pagename}</div> : "Page not found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksDisplay;
