import React from 'react';
import {connect} from 'react-redux';

import Button from '../form/button';
import CartItem from './cart-item';

import './cart.scss';

const Cart = ({cartItems}) => (
    <div className='cart-dropdown' >
        <div className='cart-items' >
            {
                cartItems.map(item =>
                    <CartItem key={item.id} item={item} /> )
            }
        </div>

        <Button >Go to CheckOut</Button>
    </div>
)

const mapStateToProps = ({shop}) => ({
    cartItems: shop.cartItems
})

export default connect(mapStateToProps) (Cart);