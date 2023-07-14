import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import CategoryListing from "../category-listing/CategoryListing";
import axios from "axios";


import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categoryBooks, setCategoryBooks] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/categories`);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/categories/${categoryId}`
      );
      console.log("response:", response.data);
      setCategoryBooks(response.data.books);
    } catch (error) {
      console.log(error);
    }
    setSelectedCategoryId(categoryId);
  };

  return (
    <section id="category-section" className={styles["category-container"]}>
      <div className={styles["container"]}>
        <h2>
          Find Your Favorite <span className="text-primary">Book</span>{" "}
          Categories
        </h2>
        <CategoryListing
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        {selectedCategoryId && (
          <div className={styles["book-container"]}>
            {categoryBooks.map((book) => (
              <div key={book.id} className={styles["book-item"]}>
                <div className="product-listing-img-container">
                  <img
                    src={`http://127.0.0.1:8000/${book.image_url} `}
                    alt="product-listing-image"
                    className="product-listing-image"
                  />
                </div>

                <h4>{book.title}</h4>
                <h4>{book?.author?.name ?? "no author"}</h4>
                <h4>€{book.price}</h4>
                <Link
                  to={`/book-details/${book.id}`}
                  className={styles["product-listing-button"]}
                >
                  See Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
