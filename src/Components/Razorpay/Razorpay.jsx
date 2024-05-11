import React, { useState } from 'react'

import { RAZORPAY_KEY, RAZORPAY_URL } from "../../Enviornment";
import { useNavigate } from "react-router-dom";
// import { verifySignatureApi, createOrder } from '../../Services/ApiCalls'

const PaymentScreen = ({ price2, btnDisabledP=false }) => {

  const navigate = useNavigate();
  const [formError, setFormError] = useState("");


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
  const payMoney = async (price23) => {
    try {
      const res = await loadScript(RAZORPAY_URL);
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // const Price = parseInt(price2)
      // const token = localStorage.getItem('token');
      // //api call or CreateOrder
      // const order = await createOrder(Price, token);
      // if (order?.data) {
      //   const options = {
      //     key: RAZORPAY_KEY,
      //     amount: order.data.data.amount,
      //     currency: "INR",
      //     name: "Ezewin",
      //     description: `Transaction for Ezewin`,
      //     // image: '../../../public/Logo4.png',
      //     order_id: order.data.data.id,

      //     handler: function (response) {
      //       verifySignature(response);
      //     },
      //     prefill: {
      //       name: "dd",//profileData.name,
      //       email: "dd",//profileData.email,
      //       contact: "",//profileData.phone,
      //     },
      //     notes: {
      //       address: "dd", //profileData.address,
      //     },
      //     theme: {
      //       color: "#3399cc",
      //     },
      //   };

      //   const rzp1 = new window.Razorpay(options);

      //   rzp1.on("payment.failed", function (response) {
      //     // alert(response.error.code);
      //     // alert(response.error.description);
      //     setFormError(
      //       `${response.error.reason}\n${response.error.description}`
      //     );
      //     // updateFormMsg();
      //     // alert(response.error.source);
      //     // alert(response.error.step);
      //     // alert(response.error.reason);
      //     // alert(response.error.metadata.order_id);
      //     // alert(response.error.metadata.payment_id);
      //   });

      //   rzp1.open();
      // }
    } catch (error) {

      if (error?.response?.status === 401) {
        // await dispatch(setToken(""));
        // history.push({
        //   pathname: "Login",
        //   state: { redirectUrl: "Wallet" },
        // });
      } else {
        setFormError("Something went wrong.");
        // updateFormMsg();
      }
    }
  };



  const verifySignature = async (paymentData) => {
    console.log("dsff",paymentData)
    const token = localStorage.getItem('token');
    try {


      const res = await verifySignatureApi(paymentData, token);

      if (res?.data.message) {

        window.location.reload();

        setTimeout(() => {
          console.error("sjdfjhvsahjfvjh>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
          navigate('/Profile');
        }, 2000);
      }
    } catch (error) {
      console.error(error)
      setFormError("Something went wrong.");
      setTimeout(() => {
        navigate('/PaymentFailed');
      }, 2000);
    }
  };

  return (
    <div>
      {/* {toast.error(formError, { position: toast.POSITION.TOP_CENTER })} */}

      <button className='btn btn-outline-danger' data-bs-dismiss="modal" onClick={() => payMoney({ price2 })} disabled={btnDisabledP}><b>Add Now {price2}</b></button>
    </div>
  )
}

export default PaymentScreen





