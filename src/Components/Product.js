import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating';
function Product(props) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{props.title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className='product_rating'>
        {/* {props.rating}<p className='icon'><FontAwesomeIcon icon={faStar} /></p> */}
          <StarRating rating={props.rating} />
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + props.image} alt='battery' />
      <button>Add to basket</button>
      <p>Another tag goes here</p>
    </div>   
         
    
  );
}

export default Product
