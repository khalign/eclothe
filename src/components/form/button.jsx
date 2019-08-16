import React from 'react';

import './form.scss';

const Button = ({children, ...props}) => (
    <button className={`${props.inverted && 'inverted'} ${props.google && 'google'} custom-button`} {...props} >
        {children}
    </button>
)

export default Button;