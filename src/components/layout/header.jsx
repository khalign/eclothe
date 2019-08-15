import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg';

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
        </div>
    </div>
);

export default Header;