import React from 'react';

const CustomBtn = ({ children }) => {
    return (
        <button className='shadow font-[Poppins]  rounded md:ml-8 
        hover: duration-500 flex items-center justify-center h-9 text-black-900 tracking-[1.00px] 
        text-center text-xl border-black-900_33 border border-solid bg-white-A700 shadow-xs min-w-[103px] rounded-[10px]'>
            {children}</button>
    );
}

export default CustomBtn;
