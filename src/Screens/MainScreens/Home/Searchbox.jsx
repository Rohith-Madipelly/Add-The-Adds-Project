import React from 'react'
import SearchF from '../EditOwnPage/SearchF'

function Searchbox() {
    return (
        <div className='h-auto'>

            <div className="px-[5em] sm:px-0 mdl:px-[2.5em] md:px-[1em] relative">
            <img
              src="images/img_rectangle_1.png"
              alt="image"
              className="justify-center h-[330px] w-full  m-auto object-cover rounded-[20px]"
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

            <SearchF/>
          </div>

        </div>
    )
}

export default Searchbox