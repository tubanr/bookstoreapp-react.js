import React, { useEffect, useState } from "react";
import styles from "./productListingAll.module.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";



const ProductListingAll = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/books");
      const data = await response.json();

      setBooks(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className={styles["product-listing-all-container"]}>
      <div className="container">
        <div className={styles["grid-container"]}>
          {books.map((book) => {
            return (
              <div className={styles["grid-item"]} key={book?.id}>
                <ProductListingCard book={book} />
                

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
