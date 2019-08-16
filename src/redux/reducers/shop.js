import {TOGGLE_CART} from '../types';

const INITIAL_STATE = {
    toggle_cart: false
}

export default function (state=INITIAL_STATE, {type, payload}) {
    switch (type) {
        case TOGGLE_CART:
            return {...state, toggle_cart: !state.toggle_cart}
        default:
            return state;
    }
}