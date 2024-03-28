
import { toast } from "react-toastify";


export const showToastMessage_success=(ToasterMessage)=> {
  // const showToastMessage = () => {
  //   console.log("kjdskj")
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

    toast.success(ToasterMessage);
}


export const showToastMessage_error=(ToasterMessage)=> {
  // const showToastMessage = () => {
  //   console.log("kjdskj")
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

    toast.error(ToasterMessage);
}
