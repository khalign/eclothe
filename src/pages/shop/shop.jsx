import React from 'react';
import Collection from '../../components/collections/collection'
import COLLECTIONS from './shop-data';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: COLLECTIONS
        }
    }

    render () {
        const {collections} = this.state;

        return (
            <div>
                {
                    collections.map(({id, ...otherProps}) => (
                        <Collection key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;