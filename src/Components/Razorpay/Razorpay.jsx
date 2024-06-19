import React, { useState } from 'react'

import { RAZORPAY_KEY, RAZORPAY_URL } from "../../Enviornment";
import { useNavigate } from "react-router-dom";
import { Button } from 'flowbite-react';
import { createOrder, verifySignatureApi } from '../../utils/APIcall';
import { PaymentResModal } from './PaymentScreens/PaymentResModal';
import { showToastMessage_error } from '../../shared/Toaster';
// import { verifySignatureApi, createOrder } from '../../Services/ApiCalls'

const PaymentScreen = ({ planId }) => {


  const [formError, setFormError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const navigate = useNavigate();
  const openModal = (title, text,route) => {
    setModalTitle(title);
    setModalText(text);
    setIsModalOpen(true);
    setRouteTo(route)
  };

  const closeModal = () => setIsModalOpen(false);


  //Script to Load Payment 
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };



  //Method to call Razorpay method
  const payMoney = async (planId) => {
   
    try {
      const res = await loadScript(RAZORPAY_URL);
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const Price = parseInt(planId)
      const token = localStorage.getItem('token');
      console.log("planId", planId, "Token", token)
      //api call or CreateOrder
      const order = await createOrder(planId, token);


   

      if (order?.data) {
        console.log("sdf", order.data.order.id)
        const options = {
          key: RAZORPAY_KEY,
          amount: order.data.order.amount,
          currency: "INR",
          name: "Addtheads",
          description: `Transaction for addtheads`,
          // image: '../../../public/Logo4.png',
          order_id: order.data.order.id,

          handler: function (response) {
            verifySignature(response);
          },
          prefill: {
            name: "dd",//profileData.name,
            email: "dd",//profileData.email,
            contact: "",//profileData.phone,
          },
          notes: {
            address: "dd", //profileData.address,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          // alert(response.error.code);
          // alert(response.error.description);
          setFormError(
            `${response.error.reason}\n${response.error.description}`
          );
          // updateFormMsg();
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      }
    } catch (error) {
      console.log(error.response)

      if (error?.response?.status === 401) {
        // await dispatch(setToken(""));
        // history.push({
        //   pathname: "Login",
        //   state: { redirectUrl: "Wallet" },
        // });
      }else if (error?.response?.status === 412) {
        
        console.log(error.response.data.message)
     
        showToastMessage_error(error.response.data.message);

      } else {
        showToastMessage_error("Something went wrong.");
        // updateFormMsg();
      }
    }
  };



  const verifySignature = async (paymentData) => {
    console.log("dsff>>>>>>>>>>>>??????????????????????", paymentData)
    const token = localStorage.getItem('token');
    // console.log("Hello ",token);
    try {


      const res = await verifySignatureApi(paymentData, token);
      console.log("resw", res)
      if (res?.data.message) {

        // window.location.reload();

        setTimeout(() => {
          // console.error("sjdfjhvsahjfvjh>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
          // navigate('/Profile');
          openModal('Payment Successful', 'Your payment has been processed successfully.','/')

        }, 2000);
      }
    } catch (error) {
      console.error(">///////////////",error)
      console.error(">///////////////",error.response.data.message)
      setFormError("Something went wrong.");
      setTimeout(() => {
      //   navigate('/PaymentFailed');
      openModal('Payment Failed', 'Your payment was Failed, Please try again.','/Upload ads')
      }, 2000);
    }
  };

  return (
    <div>
        <Button data-bs-dismiss="modal" onClick={() => payMoney({ planId })}><b>Add Now </b></Button>
        <PaymentResModal
        isOpen={isModalOpen}
        onClose={closeModal}
        classNames={{
          overlay: 'custom-overlay',
          modal: 'custom-modal',
          closeButton: 'custom-close-button',
          title: 'custom-title',
          content: 'custom-content',
        }}
        title={modalTitle}
      >
        <p>{modalText}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            // onClick={()=>{navigate(`${routeTo}`);}}
            onClick={()=>{navigate(`/`);}}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </PaymentResModal>
    </div>
  )
}

export default PaymentScreen





