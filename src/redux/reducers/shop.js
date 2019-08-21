import { addItem, removeItem } from "../../utils/helpers";
import { sections } from "../../utils/constants";
import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
  SET_COLLECTIONS,
  FETCHING,
  ERROR
} from "../types";

const INITIAL_STATE = {
  sections,
  collections: null,
  cartToggled: false,
  cartItems: [],
  fetching: false,
  error: null
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCHING:
      return { ...state, fetching: true };
    case TOGGLE_CART:
      return { ...state, cartToggled: !state.cartToggled };
    case ADD_ITEM:
      return { ...state, cartItems: addItem(state.cartItems, payload) };
    case REMOVE_ITEM:
      return { ...state, cartItems: removeItem(state.cartItems, payload) };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };
    case SET_COLLECTIONS:
      return { ...state, collections: payload, fetching: false };
    case ERROR:
      return { ...state, error: payload, fetching: false };
    default:
      return state;
  }
}
