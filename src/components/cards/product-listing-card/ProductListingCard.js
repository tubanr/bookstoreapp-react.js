import React from "react";
import "./productListingCard.styles.css";
import { Link } from "react-router-dom";

const ProductListingCard = ({ book }) => {
  return (
    <div>
      <div className="product-listing-card">
        <div className="product-listing-img-container">
          <img
            src={`http://127.0.0.1:8001/${book.image_url} `}
            alt="product-listing-image"
            className="product-listing-image"
          />
        </div>
        <div className="product-listing-details-container">
          <h3>{book?.title}</h3>
          <p className="author-name">{book?.author?.name ?? "no author"}</p>
          <p className="price">€{book?.price}</p>
          <Link
            to={`/book-details/${book.id}`}
            className="product-listing-button"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;
