import React from "react";
import './StarRating.css'
function StarRating({ rating }) {
    const stars = [];
  
    // Create an array of 5 stars
    for (let i = 0; i < rating; i++) {
      // If the current star is less than the rating, render a filled star
      // Otherwise, render an empty star
      stars.push(
        <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );    
    }
    return <div>{stars}</div>;
  }
export default StarRating