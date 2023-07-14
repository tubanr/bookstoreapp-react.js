import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetailsPage";
import CategoryListing from "./components/layouts/category-listing/CategoryListing";
import Login from "./pages/login-page/Login";
import Footer from "./components/layouts/footer/Footer";
import SearchPage from "./pages/search-page/SearchPage";
import CartPage from "./pages/cart-page/CartPage";
import { CartProvider } from "./pages/cart-page/CartContext";
import OrderTracking from "./pages/order-tracking-page/OrderTracking";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/books/search" element={<SearchPage />} />
          <Route path="/book-details/:id" element={<BookDetailsPage />} />
          <Route path="/categories" element={<CategoryListing />} />
          <Route path="/signup" element={<Footer />} />
          <Route path="/token" element={<Login />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
