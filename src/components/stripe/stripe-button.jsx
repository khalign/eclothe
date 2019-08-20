import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const cents = price * 100;
  const key = "pk_test_lT9lYvDVtK618kK2fGO1FpDr00Tci5NitN";

  const onToken = key => {
    console.log(key);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="EClothes Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Total price is $${price}`}
      amount={cents}
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeButton;
