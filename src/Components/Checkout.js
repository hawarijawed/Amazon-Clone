import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'> 
    <div className='checkout_left'>
      <img className='checkout_ad' src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e56874ad46434be.jpg?q=20' />
      {/* Condition for basket  */}
      {basket?.length === 0? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>You have no items in your basket. To buy one ore more
            items, click on "Add to Basket" next to the items.
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout-title'>Your Shopping Basket</h2>
          {/* List out all the checkout product */}
          {basket.map(item =>(
            <CheckoutProduct
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Checkout
