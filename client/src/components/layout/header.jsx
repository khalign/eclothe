import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUser } from "../../redux/selectors/account";
import {
  selectCartToggled,
  selectCartItemsCount
} from "../../redux/selectors/shop";
import * as actions from "../../redux/actions";
import { auth } from "../../utils/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart/cart-icon";
import Cart from "../cart/cart";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  LinkOption
} from "./layout.styled";

const Header = props => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <LinkOption to="/shop">SHOP</LinkOption>
      <LinkOption to="/shop">CONTACT</LinkOption>
      {props.user ? (
        <LinkOption as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </LinkOption>
      ) : (
        <LinkOption to="/login">SIGN IN</LinkOption>
      )}
      <CartIcon onClick={props.toggleCart} badge={props.itemCount} />
    </OptionsContainer>
    {props.cartToggled && <Cart />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  cartToggled: selectCartToggled,
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  actions
)(Header);
