import React from "react";
import "./searchResultCard.styles.css";

import { Link } from "react-router-dom";

const SearchResultCard = ({book}) => {
  return (
    <section className="cart-item">
      <div className="cart-item-img-container">
        <img src={`http://127.0.0.1:8001/${book.image_url} `} className="cart-item-img" alt="cart-item-img" />
      </div>

      <div className="cart-item-content-container">
        <h2>{book.title}</h2>
        <p>{book?.author?.name ?? "no author"}</p>
        <h3 className="cart-item-price">{book.price}</h3>
        <Link
            to={`/book-details/${book.id}`}
            className="button-primary"
          >
            See Details
          </Link>
      </div>
    </section>
  );
};

export default SearchResultCard;
