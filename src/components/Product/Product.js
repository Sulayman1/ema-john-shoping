import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css';
const Product = ({ product, handelClick }) => {

    const { name, img, price, seller, ratings } = product;

    return (
        < div className='products'>
            <img src={img} alt=" " />
            <div className="product-info">
                <p>{name}</p>
                <p>price : {price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings:{ratings}</p>
            </div>
            <button onClick={() => handelClick(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Product;