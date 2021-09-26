import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Book.css';
const Book = (props) => {
    // console.log(props);
    const {id,name,session,img,price,publication} = props.book;

    return (
        <div className="card">
             <img src={img} alt="" />
            <div className="card-body"> 
              <h4>{name}</h4>
              <p>Subject Code:{id}</p>
              <p>Session: {session}</p>
              <p><small>publication: {publication}</small></p>
              <p>price: ${price}</p>
              <button onClick={ () => props.handleAddToCart(props.book)} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
              </div>
        </div>
    );
};

export default Book;