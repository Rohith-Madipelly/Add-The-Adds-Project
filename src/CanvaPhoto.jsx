import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CanvaPhoto = ({close, uploadImage}) => {
    const [local, setLocal] = useState()
    const[uploadImg,setUploadImg]=useState()
    const [fileName, setFileName] = useState('No file chosen');
    const token = useSelector((state) => state.token);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          console.error(file.name,"file.name anta ")
            // setFileName(file.name);
            setLocal((file));

            console.log("filef", file.name);

        } else {
            setFileName('No file chosen');
        }
    };

    const handleSubmit=()=>{
        if(uploadImg){
        // uploadImage(URL.createObjectURL(local))
        uploadImage(`https://admin.addtheadd.com${uploadImg}`)
        close();
        }
    }


    const postImage = async () => {
  
        const formData = new FormData();
        formData.append('pic', local);
        console.error("scvav",formData);

        // const Test={
        //   'pic':local
        // }

        try {
            const response = await axios.post(
                'https://admin.addtheadd.com/user/uploadimage',formData, {
                    headers: { Authorization: "Bearer " + token },
                    // withCredentials: true
                }
            );

            console.error("jsb>>",response)
            if(response.status === 200){
                const data=await response.data
                setUploadImg(data.data.image)

                console.log("day",data.data);
                toast.success("Image uploaded")
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(()=>{
      console.error('This is an error message 1');
      if(local){
        postImage()
      }
    },[local])

    


    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4 cursor-pointer" 
        onClick={close}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
        <input
          className="mb-4"
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}

        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleSubmit}
            // disabled={!imageFile}
          >
            Upload
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
        // <>
        //     <div style={{ backgroundColor: "green" }}>
        //         {/* <button onClick={upload}>Upload image</button> */}
        //         <input
        //             type="file"
        //             id="fileInput"
        //             accept="image/*"
        //             className="hidden"
        //             onChange={handleFileChange}
        //         />
        //         <label
        //             htmlFor="fileInput"
        //             className="inline-block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
        //         >
        //             Upload photo
        //         </label>
        //         <span>{fileName}</span>
        //         {/* {local && <img src={local} alt="Selected" className="mt-4 max-w-full h-auto" />} */}
        //     </div>

        // </>
    )
}

export default CanvaPhoto