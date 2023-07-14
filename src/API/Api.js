import React, { useState, useEffect } from "react";


const BASE_URL ='http://localhost:8000/'


function Api() {
    const [books, setBooks] = useState([])
  
    useEffect( () => {
      fetch(BASE_URL + 'books').then(response => {
        console.log(response.json());
        if (response.ok){
          return response.json
        }
        throw response
      })
      .then(data =>{
        setBooks(data)
      })
      .catch(error =>{
         console.log(error)
         alert(error)
      })
    }, [])
}
return(
    <div className="product-listing-card">
        <div className="product-listing-img-container">
            <img src={ProductImage} alt="product-listing-image" className="product-listing-image"/>
            
        </div>
        <div className="product-listing-details-container">
            <h3>Book Name</h3>
            <p className="author-name">Author</p>
            <p className="price">price</p>
            <a href="#" className="product-listing-button">Button </a>
        </div>
    </div>
)
  
  export default Api;