import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCartToggled = createSelector(
  selectShop,
  shop => shop.cartToggled
);

export const selectFetching = createSelector(
  selectShop,
  shop => shop.fetching
);

export const selectSections = createSelector(
  selectShop,
  shop => shop.sections
);

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectLoaded = createSelector(
  selectCollections,
  collection => !!collection
);

export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = url =>
  createSelector(
    selectCollections,
    collections => (collections ? collections[url] : null)
  );

export const selectCartItems = createSelector(
  selectShop,
  shop => shop.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);

export const selectCartPrice = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce(
      (accumulatedPrice, item) => accumulatedPrice + item.quantity * item.price,
      0
    )
);
