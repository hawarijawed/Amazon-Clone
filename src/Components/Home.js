import React from 'react'
import './Home.css'
import Product from './Product';
import Header from './Header';
function Home() {
  return (
    <>
    {/* <Header /> */}
    <div className='home'>
      <img className='home_image'
      src='https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280'
       alt='background'  />

       {/*Product id, title, price, rating, image */}
        {/* first row */}
       <div className='home_row'>
        <Product 
          id='1234321'
          title="Energizer Alkaline Power AAA Batteries (32 Pack), Long-Lasting Triple A Batteries"
          price={11.96}
          rating={6}
          image='https://m.media-amazon.com/images/I/51rrIxEUzQL._AC_SY200_.jpg'
        />

        <Product 
          id='1234321'
          title="Moto G Play 2023 3-Day Battery Unlocked Made for US 3/32GB 16MP Camera Navy Blue"
          price={99.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/51jDwAitJWL._AC_SL1500_.jpg'
        />
       </div>
       {/* second row */}
       <div className='home_row'>
        <Product 
          id='1234321'
          title="MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Red Switch for Windows Laptop PC Mac - Black/Grey"
          price={29.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SL1500_.jpg'
        />

        <Product 
          id='1234321'
          title="Redragon K556 RGB LED Backlit Wired Mechanical Gaming Keyboard, 104 Keys Hot-Swap Mechanical Keyboard w/Aluminum Base, Upgraded Socket and Noise Absorbing Foams, Soft Tactile Brown Switch"
          price={60}
          rating={3}
          image='https://m.media-amazon.com/images/I/71KBeJ1nz6L._AC_SL1500_.jpg'
        />
        <Product 
          id='2042'
          title="Redragon Gaming Mouse, Wireless Mouse Gaming with 8000 DPI, PC Gaming Mice with Fire Button, RGB Backlit Programmable Ergonomic Mouse Gamer, Rechargeable, 70Hrs for Windows, Mac Gamer, Black"
          price={29.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/61QY3V6A-NL._AC_SL1500_.jpg'
        />
       </div>
       {/* Third row */}
       <div className='home_row'>
        <Product 
          id='105408'
          title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)"
          price={25.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg'
        />
       </div>
       {/* Product */}
    </div>
    </>
  );
}

export default Home
