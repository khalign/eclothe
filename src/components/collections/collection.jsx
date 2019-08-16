import React from 'react';
import ColItem from './col-item';

import './collection.scss';

const Collection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title' >{title}</h1>
        <div className='preview'>
            {
                items.filter((item, i) => i < 4)
                    .map((item) => (
                        <ColItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default Collection;