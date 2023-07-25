import React, { useEffect, useState, useContext } from "react";
import "./cartItemsContainer.styles.css";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from "../../../pages/cart-page/CartContext";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const CartItemsContainer = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  const access_token = localStorage.getItem("access_token");
  const [totalAmount, setTotalAmount] = useState(0);

  //Stripe library for handling the payment process 
  const {REACT_APP_STRIPE_KEY} = process.env;

  

  
  const ontoken = async (token) => {
    console.log(token);

    if (token?.id) {
      const order_lines = cartItems.map((item) => {
        return {
          book_id: item.id,
          quantity: 1,
        }; 
      });
      const res = await axios.post(
        "http://127.0.0.1:8001/orders",
        { order_lines },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log("'res", res);

      if (res.status === 200) {
        toast.success("Thanks for your order.Your payment has been processed successfully!", {
          position: "top-center",
          duration: 4000,
          style: { background: "#333", color: "#fff" },
        });
      }
    }
  };
  useEffect(() => {
    calculateTotalAmount();
  }, [cartItems]);

  const calculateTotalAmount = () => {
    const amount = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalAmount(amount);
  };

  return (
    <section className="cart-items-container">
      <div className="container">
        {totalAmount === 0 ? (
          <h2>Currently your cart is empty</h2>
        ) : (
          <React.Fragment>
            <h2>Cart</h2>
            {cartItems.map((item, index) => (
              <CartItemCard key={index} book={item} />
            ))}
            <h2>Total Amount = €{totalAmount}</h2>
            

            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"  
              amount={totalAmount * 100}
              currency="EUR"
              stripeKey={REACT_APP_STRIPE_KEY}
              billingAddress
              token={ontoken}
            />
            <Toaster/>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};
export default CartItemsContainer;

// const [orders, setOrders] = useState([]);
// const {user_id } = getUserInfo();

// useEffect(() =>{
//     const fetchUserOrders = async () => {
//         try {
//             //API call to fetch the user's orders
//             const response = await axios.get(`/orders?user_id=${user_id}`);
//             setOrders(response.data);
//         } catch (error) {
//             console.error("error fetching user orders:", error);
//         }

//         };
//         fetchUserOrders();
//     }, [user_id]);
