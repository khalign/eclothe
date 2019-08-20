import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartPrice } from "../../redux/selectors/shop";

import CheckoutItem from "../../components/cart/checkout-item";
import StripeButton from "../../components/stripe/stripe-button";

import "./checkout.scss";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>

      <div className="header-block">Description</div>

      <div className="header-block">Quantity</div>

      <div className="header-block">Price</div>

      <div className="header-block">Remove</div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}

    {cartItems.length && (
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    )}

    <div className="warning">
      Please use the following test card
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>

    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartPrice
});

export default connect(mapStateToProps)(CheckOut);
