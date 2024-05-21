import React, { useEffect, useRef, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";
import "./canva.css";
import photo from "./photo.png";
import bin from"./bin.png";
import imgshape from "./alter.png"
import CanvaPhoto from "./CanvaPhoto";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useSelector } from "react-redux";

function EditPage() {
  // const fileInputRef = useRef(null);
  const token = useSelector((state) => state.token);
  const { editor, onReady } = useFabricJSEditor();
  const [textColor, setTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("transparent");
  const [bgCanvaColor, setBgCanvaColor] = useState("transparent");
  const [backgroundImage, setBackgroundImage] = useState();
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [fontSize, setFontSize] = useState(26);
  const [fontFamily, setFontFamily] = useState("");
  const [textAlign, setTextAlign] = useState("left");
  const [fontWeight, setFontWeight] = useState(200);
  const [textState, setTextState] = useState([]);
  const [popup,setPopup]=useState(false)
  const [formCanva,setFormCanva]=useState({imageBlob:"",canvaData:""})

  const onAddCircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: 'red',
      left: 100,
      top: 100
    });
    editor.canvas.add(circle);
    editor.canvas.setActiveObject(circle);
  };

  const onAddTextbox = () => {
    const textBox = new fabric.Textbox("Enter your text", {
      left: 100,
      top: 100,
      fill: textColor,
      backgroundColor: bgColor,
      fontSize: fontSize,
      fontFamily: fontFamily,
      textAlign: textAlign,
      fontWeight:fontWeight
    });
    editor.canvas.add(textBox);
    editor.canvas.setActiveObject(textBox);
  };

  const addImageToCanvas = (url) => {
    console.log("url",url);
    // fabric.Image.fromURL(url, (img) => {
    //   img.set({ crossOrigin: 'anonymous' });
    //   img.scaleToWidth(200);
    //   img.scaleToHeight(200);
    //   editor.canvas.add(img);
      
    //   // editor.canvas.add(img);
    //   editor.canvas.setActiveObject(img);
    //   editor.canvas.renderAll();
    // }, { crossOrigin: 'anonymous' });
    fabric.Image.fromURL(url, (img) => {
      img.set({ crossOrigin: 'anonymous' });
      img.scaleToWidth(200);
      img.scaleToHeight(200);
      editor.canvas.add(img);
      // editor.canvas.add(img);
      editor.canvas.setActiveObject(img);
      editor.canvas.renderAll();
    },{ crossOrigin: 'anonymous' });
  };
   
  const cropImage = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'image') {
      const clipRect = new fabric.Rect({
        left: activeObject.left,
        top: activeObject.top,
        width: activeObject.width,
        height: activeObject.height,
        fill: 'rgba(0,0,0,0)',
        strokeWidth: 0,
        selectable: false,
        evented: false,
      });
      activeObject.set({
        clipPath: clipRect,
      });
      editor.canvas.renderAll();
    }
  };
  
  
  const rotateImage = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'image') {
      activeObject.angle += 90;
      editor.canvas.renderAll();
    }
  };
  const changeShape = () => {
    const activeObject = editor.canvas.getActiveObject();
    if (activeObject && activeObject.type === 'image') {
      // Change the shape (e.g., from rectangle to ellipse)
      activeObject.set('clipPath', new fabric.Ellipse({
        rx: activeObject.width / 2,
        ry: activeObject.height / 2,
        left: activeObject.left,
        top: activeObject.top,
        originX: 'center',
        originY: 'center',
      }));
      editor.canvas.renderAll();
    }
  };

  const onAddImage = () => {
    if (localImageUrl) {
      addImageToCanvas(localImageUrl);
    }
  };
  const onLayerClick = (object) => {
    editor.canvas.setActiveObject(object);
    editor.canvas.renderAll();
  };

  if (editor) {
    const dt = editor.canvas.getRetinaScaling();
    console.log("Retina scaling:", dt);
  } else {
    console.warn("Canvas is not initialized.");
  }

  const changeBackgroundImage = (file) => {
    setBackgroundImage(file);
  };

  const changeBackgroundColor = (color) => {
    setBgCanvaColor(color);
  };

  // const saveAsJpg = () => {
  //   if (editor && editor.canvas) {
  //     const canvas = editor.canvas;
  //     const canvasElement = canvas.lowerCanvasEl;
  //     if (canvasElement) {
        
  
  //       const dataURL = canvasElement.toDataURL({
  //         format: 'jpeg',
  //         quality: 0.8
  //       });
        
  //       const link = document.createElement('a');
  //       link.href = dataURL;
  //       link.download = 'canvas.jpg';
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       setFormCanva((prevFormCanva) => {
  //         const updatedFormCanva = { ...prevFormCanva, image: dataURL };
  //         console.log("canvadata", updatedFormCanva);
  //         return updatedFormCanva;
  //       });
  //     }
  //   }
  // };
  const saveAsJpg = () => {
    if (editor && editor.canvas) {
        const canvas = editor.canvas;
        const canvasElement = canvas.lowerCanvasEl;
        if (canvasElement) {
            const dataURL = canvasElement.toDataURL('image/jpeg', 0.8);
            const blob = dataURLToBlob(dataURL);
            const link = document.createElement('a');
                  link.href = dataURL;
                  link.download = 'canvas.jpg';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
            setFormCanva((prevFormCanva) => {
                const updatedFormCanva = { ...prevFormCanva, imageBlob: blob };
                console.log("canvadata", updatedFormCanva);
                return updatedFormCanva;
            });
        }
    }
};

const dataURLToBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
};

  
  const saveAsJson = () => {
    if (editor && editor.canvas) {
      const canvas = editor.canvas;
      const jsonData = canvas.toJSON();
      const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      setFormCanva((prevFormCanva) => {
        const updatedFormCanva = { ...prevFormCanva, canvaData: jsonData };
        console.log("canvadata", updatedFormCanva);
        return updatedFormCanva;
      });
    // console.log("canvadata",formCanva);
     const a = document.createElement('a');
      a.href = url;
      a.download = 'canvas.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleDelete = () => {
    if (editor && editor.canvas) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        editor.canvas.remove(activeObject);
        editor.canvas.renderAll();
      }
    }
  };

  const setCanvasBackground = () => {
    if (editor && editor.canvas) {
      editor.canvas.backgroundColor = bgCanvaColor;

      if (backgroundImage) {
        fabric.Image.fromURL(backgroundImage, (img) => {
          editor.canvas.setBackgroundImage(
            img,
            editor.canvas.renderAll.bind(editor.canvas)
          );
        });
      } else {
        editor.canvas.setBackgroundImage(null);
      }
    }
  };

  const loadJson = () => {
    const jsonData = '{"version":"5.3.0","objects":[{"type":"image","version":"5.3.0","originX":"left","originY":"top","left":63.95,"top":106.84,"width":474,"height":266,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":0.75,"scaleY":0.75,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"https://admin.addtheadd.com/uploadings/1716200091332.jpeg","crossOrigin":null,"filters":[]}],"background":"#f9a4ac"}';
    if (editor && editor.canvas) {
      const data = JSON.parse(jsonData);
      editor.canvas.loadFromJSON(data);
      editor.canvas.renderAll();
    }
  };

  useEffect(() => {
    setCanvasBackground();
    if (editor) editor.canvas.renderAll();
  }, [editor, bgCanvaColor, backgroundImage]);

  useEffect(() => {
    if (editor && editor.canvas) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject && activeObject.type === 'textbox') {
        activeObject.set({ fill: textColor, backgroundColor: bgColor, fontSize: fontSize,
          fontFamily: fontFamily,fontWeight:fontWeight,
          textAlign: textAlign });
        editor.canvas.renderAll();
      }
    }
  }, [textColor, bgColor,fontSize,fontFamily,textAlign,fontWeight]);

  useEffect(() => {
    return () => {
      // Revoke the previous URL object when the component unmounts or the local image changes
      if (previousUrl) {
        URL.revokeObjectURL(previousUrl);
      }
    };
  }, [previousUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setLocalImageUrl(newUrl);

      // Revoke the previous URL object if it exists
      if (previousUrl) {
        URL.revokeObjectURL(previousUrl);
      }

      setPreviousUrl(newUrl);
    }
  };


  const postCanvaData = async () => {
    if (formCanva.canvaData && formCanva.imageBlob) {
      console.log(">>>>>>>>>>>>>>>>>>", formCanva);
      const formData = new FormData();
      formData.append('image', formCanva.imageBlob, 'canvas.jpg');
      formData.append('canvaData', JSON.stringify(formCanva.canvaData))
      console.log(",,,,,,,", formData);

      try {
        const response = await axios.post(
          'https://admin.addtheadd.com/user/uploadcanva',
          formData,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
  
        if (response.status === 200) {
          console.log("canvapost", response);
        } else {
          throw new Error('Failed to upload canvas data',error.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log("Canvas data or image is missing");
    }
  };
  
useEffect(()=>{
  postCanvaData()
},[formCanva])
  return (
      <div className='new_Page_GroundImage'>
        <ToastContainer />
      <div className='h-[70px] HomeBackGroundImage'>
      </div>
        <div className="container-head">
          {/* {textState &&  */}
           <div className="textColor">
            <div>
              <label>color: </label><br/>
        <input
            type="color" 
            className="inputColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          </div>
          <div>
            <label>Box color: </label><br/>
          <input
            type="color"
            className="inputColor"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          </div>
          <div>
          <label>Size: </label><br/>
           <input className="num"
          type="number"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
            updateActiveText("fontSize", e.target.value);
          }}
          placeholder="Font Size"
        />
       </div>
       <div>
          <label>Weight: </label><br/>
        <input
          type="number" className="num"
          value={fontWeight}
          onChange={(e) => {
            setFontWeight(e.target.value);
            updateActiveText("fontWeight", e.target.value);
          }}
          placeholder="Font Weight"
        />
        </div>
        <div>
          <label>Style: </label><br/>
        <select
          value={fontFamily}
          onChange={(e) => {
            setFontFamily(e.target.value);
            updateActiveText("fontFamily", e.target.value);
          }}
        >
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Roboto">Roboto</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Tahoma">Tahoma</option>
          <option value="PT Sans">PT Sans</option>
          <option value="Georgia">Georgia</option>
          <option value="Bebas Neue">Bebas Neue</option>
          <option value="Century Gothic">Century Gothic</option>
        </select>
        </div>
        <div>
          <label>Align: </label><br/>
        <select
          value={textAlign}
          onChange={(e) => {
            setTextAlign(e.target.value);
            updateActiveText("textAlign", e.target.value);
          }}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
        </div>
          </div>
{/* } */}
        </div>
      <div className="container-canva" >
   
        <div className="sidebar">
          <button onClick={onAddTextbox}><svg width="30" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.875 0.25H2.125C1.62772 0.25 1.15081 0.447544 0.799175 0.799175C0.447544 1.15081 0.25 1.62772 0.25 2.125V20.875C0.25 21.3723 0.447544 21.8492 0.799175 22.2008C1.15081 22.5525 1.62772 22.75 2.125 22.75H20.875C21.3723 22.75 21.8492 22.5525 22.2008 22.2008C22.5525 21.8492 22.75 21.3723 22.75 20.875V2.125C22.75 1.62772 22.5525 1.15081 22.2008 0.799175C21.8492 0.447544 21.3723 0.25 20.875 0.25ZM18.0625 7.75C18.0625 7.99864 17.9637 8.2371 17.7879 8.41291C17.6121 8.58873 17.3736 8.6875 17.125 8.6875C16.8764 8.6875 16.6379 8.58873 16.4621 8.41291C16.2863 8.2371 16.1875 7.99864 16.1875 7.75V6.8125H12.4375V17.125H14.3125C14.5611 17.125 14.7996 17.2238 14.9754 17.3996C15.1512 17.5754 15.25 17.8139 15.25 18.0625C15.25 18.3111 15.1512 18.5496 14.9754 18.7254C14.7996 18.9012 14.5611 19 14.3125 19H8.6875C8.43886 19 8.2004 18.9012 8.02459 18.7254C7.84877 18.5496 7.75 18.3111 7.75 18.0625C7.75 17.8139 7.84877 17.5754 8.02459 17.3996C8.2004 17.2238 8.43886 17.125 8.6875 17.125H10.5625V6.8125H6.8125V7.75C6.8125 7.99864 6.71373 8.2371 6.53791 8.41291C6.3621 8.58873 6.12364 8.6875 5.875 8.6875C5.62636 8.6875 5.3879 8.58873 5.21209 8.41291C5.03627 8.2371 4.9375 7.99864 4.9375 7.75V5.875C4.9375 5.62636 5.03627 5.3879 5.21209 5.21209C5.3879 5.03627 5.62636 4.9375 5.875 4.9375H17.125C17.3736 4.9375 17.6121 5.03627 17.7879 5.21209C17.9637 5.3879 18.0625 5.62636 18.0625 5.875V7.75Z" fill="white"/>
</svg>
 </button><p style={{color:"white"}}>Text</p>
          <button onClick={onAddImage}><svg width="33" height="33" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8125 5.1875H5.1875C4.69022 5.1875 4.21331 5.38504 3.86167 5.73667C3.51004 6.08831 3.3125 6.56522 3.3125 7.0625V23.9375C3.3125 24.4348 3.51004 24.9117 3.86167 25.2633C4.21331 25.615 4.69022 25.8125 5.1875 25.8125H25.8125C26.3098 25.8125 26.7867 25.615 27.1383 25.2633C27.49 24.9117 27.6875 24.4348 27.6875 23.9375V7.0625C27.6875 6.56522 27.49 6.08831 27.1383 5.73667C26.7867 5.38504 26.3098 5.1875 25.8125 5.1875ZM18.7812 10.8125C19.0594 10.8125 19.3313 10.895 19.5625 11.0495C19.7938 11.204 19.974 11.4236 20.0805 11.6806C20.1869 11.9376 20.2147 12.2203 20.1605 12.4931C20.1062 12.7659 19.9723 13.0165 19.7756 13.2131C19.579 13.4098 19.3284 13.5437 19.0556 13.598C18.7828 13.6522 18.5001 13.6244 18.2431 13.518C17.9861 13.4115 17.7665 13.2313 17.612 13C17.4575 12.7688 17.375 12.4969 17.375 12.2188C17.375 11.8458 17.5232 11.4881 17.7869 11.2244C18.0506 10.9607 18.4083 10.8125 18.7812 10.8125ZM5.1875 23.9375V20.6562L11.2812 14.5625L20.6562 23.9375H5.1875ZM25.8125 23.9375H23.3082L19.0895 19.7188L21.4332 17.375L25.8125 21.7555V23.9375Z" fill="white"/>
</svg>
</button><p style={{color:"white"}}>Image</p>

{/* <button onClick={cropImage}>Crop Image</button> */}
        {/* Add button for rotating */}
        {/* <button onClick={rotateImage}>Rotate Image</button> */}
        {/* Add button for changing shape */}
        <button onClick={changeShape}><img src={imgshape}
        style={{ cursor: 'pointer', width:"25px" }} 
         alt="change shape"/>
         </button> <p style={{color:"white"}}>image</p><p style={{color:"white"}}>shape</p>
          
          {/* <input
            type="file"
            placeholder="Enter image URL"
            ref={fileInputRef}
            onChange={(e) => setLocalImageUrl(URL.createObjectURL(e.target.files[0]))}
            style={{ display: 'none' }}
          /> */}
          {/* <img src={photo} alt="Uploaded"
          onClick={()=>{fileInputRef.current.click();}}
          style={{ cursor: 'pointer', width:"28px" }} /><p style={{color:"white"}}>uploads</p> */}
          <img src={photo} alt="Uploaded"
          onClick={()=>{setPopup(true)}}
          style={{ cursor: 'pointer', width:"28px" }} />

          <input  style={{
          padding: "5px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "none",
          cursor: "pointer"
        }}
            type="color"
            value={bgCanvaColor}
            onChange={(e) => changeBackgroundColor(e.target.value)}
          />
        </div>
        {/* <div className="canvas-container"> */}
          <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        {/* </div> */}
        <div className="layerName">
          Layers:
           {/* <p>layers deletelayer </p> */}
          {editor &&
            editor.canvas.getObjects().map((obj, index) => (
              <div key={index}>
                <button
                  className={editor.canvas.getActiveObject() === obj ? 'active' : ''}
                  onClick={() => onLayerClick(obj)}
                >
                  Layer {index + 1}
                </button>
                <button onClick={() => { onLayerClick(obj); handleDelete(index); }}><img className="binimg" src={bin}/></button>
              </div>
            ))}
        </div>
      </div>
      <div className="saveButton">
        <button onClick={loadJson}>canvas</button>
        <button onClick={saveAsJpg}>Save as JPG</button>
        <button onClick={()=>{saveAsJpg();saveAsJson()}}>Save as canvas</button>
      </div>
      {popup && (            
      <CanvaPhoto  close={()=>{setPopup(false)}}
      uploadImage={setLocalImageUrl}/>


        // <div className="fixed inset-0 flex items-center justify-center z-50">
        //   <div className="fixed inset-0 bg-black bg-opacity-50" 
        //   onClick={()=>setPopup(true)}></div>
        //   <div className="relative bg-white p-4 rounded-lg shadow-lg z-50">
        //     <button onClick={()=>setPopup(true)} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">Close</button>
        //     <CanvaPhoto />
        //   </div>
        // </div>
      )}
            {console.log("ll",localImageUrl)}
      {/* <div>
      {
  textState.map((each) => {
    const { url } = each;
    <img key={url} src={url} alt=""  onClick={()=>{
      setLocalImageUrl(URL.createObjectURL(url))
    }}/>;
  })
}

      </div> */}
    </div>
  )
}

export default EditPage;
