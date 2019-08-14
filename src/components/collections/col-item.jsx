import React from 'react';
import './collection.scss';


const ColItem = ({imageUrl, name, price}) => (
    <div className='collection-item'>
        <div className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
         /> 

         <div className='collection-footer'>
             <span className='name'>{name}</span>
             <span className='price'>{price}</span>
         </div>
    </div>
);

export default ColItem;