import {updateCart} from '../../utils/helpers';
import {TOGGLE_CART, ADD_ITEM} from '../types';

const INITIAL_STATE = {
    cartToggled: false,
    cartItems: []
}

export default function (state=INITIAL_STATE, {type, payload}) {
    switch (type) {
        case TOGGLE_CART:
            return {...state, cartToggled: !state.cartToggled};
        case ADD_ITEM:
            return {...state, cartItems: updateCart(state.cartItems, payload) }
        default:
            return state;
    }
}