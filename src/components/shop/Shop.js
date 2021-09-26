import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Book from '../books/Book';
import Cart from '../cart/Cart';
import './shop.css'
const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( () => {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
          
            <div className="product-container">

                         
                  {
                     books.map(book => <Book  key={book.id} book={book}
                     handleAddToCart={handleAddToCart}
                     ></Book>)
                  }
                             
                   
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;