import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <img className='home_image'
      src='https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280'
       alt='background'  />

       {/*Product id, title, price, rating, image */}
       <Product 
       id='1234321'
       title="Energizer Alkaline Power AAA Batteries (32 Pack), Long-Lasting Triple A Batteries"
       price={11.96}
       rating={6}
       image='https://m.media-amazon.com/images/I/51rrIxEUzQL._AC_SY200_.jpg'
       />
       {/* Product */}
    </div>
  );
}

export default Home
