import React from 'react'
import StarRating from './StarRating'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct(props) {
  const [{basket},dispatch] = useStateValue();

  const RemoveFromBasket =()=>{
       //remove item from basket..
       dispatch({
        type: "REMOVE_FROM_BASKET",
        id: props.id,
       });
  }
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct_img" src= {props.image} />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{props.title}</p>
        <p className='checkoutProduct_title'>
        <small>$</small>
        <strong>{props.price}</strong>
        </p>

        <div className='checkoutProduct_rating'>
        <StarRating rating={props.rating} />
        </div>
        <button onClick={RemoveFromBasket} >Remove from Basket</button>
      </div>
    </div> 
  )
}

export default CheckoutProduct
