import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/navbar/Navbar";
import "./searchPage.styles.css";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";

const SearchPage = () => {
  //store user's search query and search results 
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [location]);

  useEffect(() => {
    const searchBooks = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/books?keyword=${encodeURIComponent(
            searchQuery
          )}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error searching books:", error);
      }
    };

  
    if (searchQuery) {
      searchBooks();
    }
  }, [searchQuery]);

  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="search-result-container">
        <div className="container-search">
          <h2>Your Search Result:</h2>
          {searchResults.map((book) => (
            <SearchResultCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
