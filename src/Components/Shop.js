import React from 'react';
import './Shop.css';
import Nike_banner from '../Assets/Nike_banner.jpg'
import LeftNavigationShop from './LeftNavigationShop';

const Shop = () => {
    return <div className='shop'>
        <img src={Nike_banner} className="shop_Banner" />

        
        <div className='shop_area'>
            <LeftNavigationShop />
        </div>

    </div>
}

export default Shop