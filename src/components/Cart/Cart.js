import React from 'react';
import './Cart.css'
const Cart = ({ cart, children }) => {

    // console.log();
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        // console.log(product);
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const geandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Sammary</h2>
            <p>Selected item: {cart.length}</p>
            <p>total price : {total}</p>
            <p>total shiping : {shipping}</p>
            <p>tax :{tax}</p>
            <h3>grand total :{geandTotal}</h3>
            {children}
        </div>
    );
};

export default Cart;