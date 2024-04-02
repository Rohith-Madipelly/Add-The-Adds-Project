import { showToastMessage_success } from "../shared/Toaster";

const CopyToClipBoard=(textToCopy,message)=>{

        navigator.clipboard.writeText(textToCopy)
          .then(() => {

            showToastMessage_success(message)
            setTimeout(() => {

            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });

}
export default CopyToClipBoard