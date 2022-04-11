import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCarts(products);
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}></Reviewitem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate("/inventory")}>Proced Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;