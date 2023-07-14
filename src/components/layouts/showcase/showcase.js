import React from "react";
import './showcase.styles.css';
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const ShowCase = () =>{
    return(
    <section className="showcase-container">
        <Navbar />
        <div className="overlay"></div>
        <div className="showcase-content">
            <h1> Unlock the Magic of <span className="text-primary">Books</span></h1>
            <p>Find quality books at cheaper price</p>
            
            <SearchInputForm darkTheme={true}/>
        </div>
       


    </section>
    )
}

export default ShowCase;