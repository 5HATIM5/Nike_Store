import React from 'react';
import '../ShopComponentsStyling/Shop.css'
import FreeShipping from '../ShopComponents/FreeShipping';
import LeftNavigationShop from './LeftNavigationShop';
import ShopProduct from './ShopProduct';

const Shop = () => {
    return <div className='shop'>
        <FreeShipping />


        <div className='shop_area'>
            <LeftNavigationShop />
            <ShopProduct />
        </div>

    </div>
}

export default Shop