import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCartToggled = createSelector(
    [selectShop],
    shop => shop.cartToggled
);

export const selectCartItems = createSelector(
  [selectShop],
  shop => shop.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
);

export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce((accumulatedPrice, item) => accumulatedPrice + item.quantity * item.price, 0)
);