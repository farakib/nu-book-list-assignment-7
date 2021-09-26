import React from 'react';
import './Book.css';
const Book = (props) => {
    // console.log(props);
    const {id,name,img,price,publication} = props.book;

    return (
        <div className="card">
             <img src={img} alt="" />
            <div className="card-body"> 
              <h4>{name}</h4>
              <p>Subject Code:{id}</p>
              <p><small>publication: {publication}</small></p>
              <p>price: {price}</p>
              <button onClick={ () => props.handleAddToCart(props.book)} className="cart-button">add to cart</button>
              </div>
        </div>
    );
};

export default Book;