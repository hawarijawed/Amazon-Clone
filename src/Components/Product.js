import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating';
import './Product.css'
import { useStateValue } from './StateProvider';
function Product(props) {
  const buttonStyle = {
    backgroundColor: 'orange',
    marginBottom:'10px',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '2px',
    cursor: 'pointer',
    border: '1px solid black',
    fontSize: '0.75rem',
    
  };

  const imageStyle={
    maxHeight: '200px',
    width:'100%',
    objectFit:'contain',
    marginBottom:'10px',
    marginTop:'10px'
  
  }
  const[{basket}, dispatch] = useStateValue();
  const addToBasket=()=>{
    // Add item to basket
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:props.id,
        title: props.title,
        image:props.image,
        price:props.price,
        rating:props.rating
      },
    });
  };
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
      <img style={imageStyle} src={process.env.PUBLIC_URL + props.image} alt='battery' />
      <button style={buttonStyle} onClick={addToBasket}>Add to basket</button>
    </div>   
         
    
  );
}

export default Product
