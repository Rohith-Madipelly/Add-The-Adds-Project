import React from 'react'
import { Link } from 'react-router-dom'

function CustomButton({children,classStyle,onClick}) {
  return (
    <button className={`${classStyle} rouder-sm bg-white-A700 shadow rounded 
    flex items-center justify-center h-9 text-black-900 
    text-center border border-solid drop-shadow-xl  rounded-[10px] px-4 py-2 text-xl'
 `} onClick={onClick}>
       {children}
    </button>
  )
}

export default CustomButton