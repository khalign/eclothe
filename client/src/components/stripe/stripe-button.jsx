import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const cents = price * 100;
  const key = "pk_test_lT9lYvDVtK618kK2fGO1FpDr00Tci5NitN";

  const onToken = async key => {
    try {
      // const response =
      await axios({
        url: "pay",
        method: "post",
        data: { amount: cents, token: key }
      });
      // console.log(response);
      alert("Payment successfull");
    } catch (error) {
      console.log(error);
      alert(
        "Payment error. Be sure to use provided test credit cart credentials"
      );
    }
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
