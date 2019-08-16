import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectUser} from '../../redux/selectors/account';
import { selectCartToggled, selectCartItemsCount} from '../../redux/selectors/shop';
import * as actions from '../../redux/actions';
import {auth} from '../../utils/firebase'

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
            <CartIcon onClick={props.toggleCart} badge={props.itemCount} />
        </div>
        {props.cartToggled && <Cart/>}
    </div>
);

const mapStateToProps = createStructuredSelector({
    user: selectUser,
    cartToggled: selectCartToggled,
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, actions)(Header);