import React from 'react';

import './form.scss';

const Button = ({children, ...props}) => (
    <button className='custom-button' {...props} >
        {children}
    </button>
)

export default Button;