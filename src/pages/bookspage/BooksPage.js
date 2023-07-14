import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import SearchInputForm from "../../components/forms/searchInputForm/SearchInputForm";
import "./booksPage.styles.css";
import ProductListingAll from "../../components/layouts/product-listing-all/ProductListingAll";
import Footer from "../../components/layouts/footer/Footer";

const BooksPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="search-container">
        <h2>
          Unlock the Magic of <span className="text-primary">Books</span>
        </h2>
        <SearchInputForm darkTheme={false} />
      </div>
      <ProductListingAll />
      

      <Footer />
    </section>
    
  );
};

export default BooksPage;
