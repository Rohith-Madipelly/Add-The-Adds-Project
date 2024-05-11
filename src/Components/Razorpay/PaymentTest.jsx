import React from 'react'
import Razorpay from './Razorpay'
import PaymentScreen from './Razorpay';
import Razorpay2 from './Razorpay2';

function PaymentTest() {
  var amount=490;
  return (
    <div>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>
      <h1>Hello Payment Test</h1>

      <button onClick={()=>{Razorpay2(amount)}}>Hello Pay now</button>
    {/* <PaymentScreen price2={25}/> */}
    </div>
  )
}

export default PaymentTest
