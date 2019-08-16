import React from 'react';
import { ReactComponent as BagIcon } from '../../assets/bag.svg';
import './cart.scss';

const CartIcon = (props) => (
    <div className='cart-icon' {...props} >
        <BagIcon className='shopping-icon' />
        <span className='item-count' >{props.badge}</span>
    </div>
)

export default CartIcon;