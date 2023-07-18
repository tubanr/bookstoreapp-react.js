import React, { useContext } from "react";
import './cartItemCard.styles.css';
import { CartContext } from "../../../pages/cart-page/CartContext";


const CartItemCard =( {book}) =>{
    const { removeItemFromCart } = useContext(CartContext);
    const handleRemove = () =>{
        removeItemFromCart(book.id)
    }
    return (
        <section className="cart-item">
          <div className="cart-item-img-container">
            <img className="cart-item-img"  src={`http://127.0.0.1:8001/${book.image_url} `}alt="cart-item-img" />
          </div>
          <div className="cart-item-content-container">
            <h2>{book?.title}</h2>
            <p>{book?.author?.name}</p>
            <h3 className="cart-item-price">€{book?.price}</h3>
            <button onClick={handleRemove} className="delete-btn">Remove from Cart</button>

          </div>


        </section>



        
    )
}

export default CartItemCard;