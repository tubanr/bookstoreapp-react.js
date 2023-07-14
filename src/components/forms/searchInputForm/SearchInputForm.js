import React, { useState } from "react";
import "./Searchinputform.styles.css";
import { useNavigate } from "react-router-dom";

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const redirectToSearch = () => {
    navigate(`/books/search?q=${searchField}`);
    //navigate('/books/search', {state:{ searchQuery: searchField}});
  };

  return (
    <div
      className={`search-input-form-container ${
        darkTheme ? "dark-box-shadow" : "light-box-shadow"
      }`}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search Books"
        value={searchField}
        onChange={handleChange}
      />

      <button onClick={redirectToSearch} className="search-button">
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchInputForm;
