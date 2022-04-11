import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviewitem.css'
const Reviewitem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, shipping, price, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-detail-container'>
                <div className="review-item-detail" title={name}>
                    <p>Name={name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price {price} </p>
                    <p>shipping {shipping}</p>
                    <p>Quantity {quantity}</p>

                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
        </div>
    );
};

export default Reviewitem; <h1>review</h1>