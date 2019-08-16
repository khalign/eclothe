import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/selectors/shop';
import {toggleCart} from '../../redux/actions/shop';

import Button from '../form/button';
import CartItem from './cart-item';

import './cart.scss';

const Cart = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown' >
        <div className='cart-items' >
            {
                cartItems.length ?
                    cartItems.map(item =>
                        <CartItem key={item.id} item={item} /> )
                :   <span className='empty' >Your cart is empty!</span>
            }
        </div>

        <Button onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCart())
            }} >
            Go to CheckOut
        </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));