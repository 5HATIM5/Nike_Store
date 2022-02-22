import '../ShopComponentsStyling/ShopProduct.css'
import sb from '../../../Assets/sb.jpg';
import jordan_banner from '../../../Assets/jordan_banner.jpg';
import ShopProductCard from './ShopProductCard';
import React from 'react';
import { useSelector } from 'react-redux';

const ShopProduct = () => {

  const products = useSelector((p) => p.shop.products);

  return (
    <div className='ShopProduct'>

      <div className='img_box'>
        <img src={sb} className="sb_img" alt='sb' />
        <img src={jordan_banner} className="sb_img" alt='jordan' />
      </div>

      <div className='shop_products'>
        <h1>All Shoes</h1>
        <hr />

        <div className='products_line'>
          {
            products.map((prod) => (
              <ShopProductCard
                key={prod.id}
                productData={prod}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ShopProduct;