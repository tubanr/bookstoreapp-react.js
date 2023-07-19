import React, { useEffect, useState, useContext } from "react";
import "./detailsSection.styles.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserInfo } from "../../../utils/Auth";
import { CartContext } from "../../../pages/cart-page/CartContext";
import { isLoggedIn } from "../../../utils/Auth";
import toast, { Toaster } from "react-hot-toast";
import "./Review.styles.css";

const DetailsSection = () => {
  const [authenticated, setAuthenticated] = useState(isLoggedIn()); //keep track weather user is authenticated or not
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { addItemToCart } = useContext(CartContext);
  const [reviewText, setReviewText] = useState(""); // to store the user's input for the review text

  const handleReviewInputChange = (event) => {
    //updates review text whenever the user types in the input field
    setReviewText(event.target.value);
  };

  const handleSubmitReview = (event) => {
    //this is called whenever user submits the review form
    event.preventDefault();

    const createReview = async () => {
      //Perform API request to create the new review
      try {
        const userInfo = getUserInfo();
        const access_token = userInfo.access_token;
        const response = await axios.post(
          " http://127.0.0.1:8001/reviews",
          {
            text: reviewText,
            book_id: book.id,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.access_token}`,
            },
          }
        );

        const newReview = {
          ...response.data,
          user: { username: userInfo.username },
        };

        setBook((prevBook) => ({
          ...prevBook,
          reviews: [newReview, ...prevBook.reviews],
        }));

        setReviewText("");  //clear review input field
      } catch (error) {
        console.log(error);
      }
    };
    createReview();
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8001/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const userInfo = getUserInfo();
    if (userInfo.access_token) {
      //Add the book to the cart
      addItemToCart(book);

      toast.success(`The book ${book.title} successfully added to the cart`, {
        position: "bottom-center",
        duration: 4000,
        style: { background: "#333", color: "#fff" },
      });
    } else {
      console.log("user not logged in");
      //navigate to login page
      navigate("/token");
      alert("Please login first...");
    }
  };

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={`http://127.0.0.1:8001/${book.image_url} `} alt="book" />
          </div>

          <div className="book-detail-container">
            <h2>{book.title}</h2>
            <p className="text-primary">{book?.author?.name ?? "no author"}</p>
            <p className="book-description">{book.description}</p>
            <p className="price">€{book?.price}</p>
            <a onClick={handleAddToCart} className="cart-button">
              Add To Cart
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="reviews-container">
          <h3>Customer reviews</h3>

          {authenticated ? ( // Conditional rendering for review form
            <form onSubmit={handleSubmitReview}>
              <textarea
                placeholder="Write your review"
                value={reviewText}
                onChange={handleReviewInputChange}
              />

              <button type="submit">Submit</button>
            </form>
          ) : (
            <p>Please login to add a review</p>
          )}

          {book.reviews.length > 0 ? (
            book.reviews.map((review) => (
              <div key={review.id} className="reviews-item">
                <p>By: {review.user?.username}</p>
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default DetailsSection;
