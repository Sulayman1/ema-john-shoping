import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoreCart } from '../../utilities/fakedb'
import './Shop.css';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        const storedCart = getStoreCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products])

    const handelClick = (product) => {
        // console.log(product);
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id);
    }

    return (
        <div>
            <div>
                <h1> Mr ema john shop</h1>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handelClick={handelClick}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/order"><button>Place Your Order</button></Link>
                    </Cart>
                </div>
            </div >
        </div>
    );
};

export default Shop;