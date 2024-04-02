import React, { useState } from 'react'
import { IoAddCircleSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

function Tester() {
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

    return (
        <div className='h-full'>
            <div className='h-[100px]'>

            </div>
 



            {LinkList.map((singleService, index) => (
                <div key={index} className="services flex justify-center">
                    <div className='flex flex-col w-[100%] '>
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

            {/* {
                LinkList &&
                LinkList.map((singleService, index) => (
                    <ul key={index}>
                        {singleService.service && <li>{singleService.service}</li>}
                    </ul>
                ))
            } */}

            <div className='h-[100px]'>

            </div>
        </div >
    )
}

export default Tester