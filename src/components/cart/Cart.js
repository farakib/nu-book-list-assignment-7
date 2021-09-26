import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart} = props;
   let total = 0;
   for(const book of cart){
       total = total + book.price;
   }
    return (
        <div className="cart-item">
            <h3>Order Items: {props.cart.length}</h3>
            <br />
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;