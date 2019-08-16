import {TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM} from '../types';

export const toggleCart = () => ({
    type: TOGGLE_CART
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItem = (item) => ({
    type: CLEAR_ITEM,
    payload: item
});