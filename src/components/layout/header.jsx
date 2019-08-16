import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../redux/actions';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart/cart-icon';
import Cart from '../cart/cart';

import './layout.scss';

const Header = (props) => (
    <div className='header' >
        <Link to='/' className='logo-container' >
            <Logo className='logo' />
        </Link>

        <div className='options' >
            <Link to='/shop' className='option' >SHOP</Link>
            <Link to='/shop' className='option' >CONTACT</Link>
            {
                props.user ?
                <div onClick={()=> auth.signOut()} className='option' >
                    SIGN OUT
                </div>
                :
                <Link to='/login' className='option'>SIGN IN</Link>
            }
            <CartIcon onClick={props.toggleCart} />
        </div>
        {props.toggle_cart && <Cart/>}
    </div>
);

const mapStateToProps = ({account, shop}) => ({
    user: account.user,
    toggle_cart: shop.toggle_cart
})

export default connect(mapStateToProps, actions)(Header);