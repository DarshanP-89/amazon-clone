import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Jun22/RTB/Deals-PC-1500-FDFO._CB633437452_.jpg' alt='' />

        <div className='home-row'>
          <Product id='12457896'
            title='The lean Start-Up'
            price={19.99}
            image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg'
            rating={3} />
          <Product id='14789632'
            title='ISRAELNA CHAMTKARIK PARAKARMO (Gujarati Edition)'
            price={29.99}
            image='https://m.media-amazon.com/images/I/718tEyNJ6OS._AC_UY218_.jpg'
            rating={4} />
        </div>

        <div className='home-row'>
          <Product id='12457897'
            title='Apple Smart Watch Series 7'
            price={599.99}
            image='https://m.media-amazon.com/images/I/41-+p07H1-L._AC_SY230_.jpg'
            rating={4} />
          <Product id='12457887'
            title='Samasung QLED Smart TV'
            price={1199.99}
            image='https://m.media-amazon.com/images/I/61W8Stul3wL._AC_SX355_.jpg'
            rating={3} />
          <Product id='12457787'
            title='Sony WHXB910N Noise Cancelling Wireless Headphones, Black'
            price={79.99}
            image='https://m.media-amazon.com/images/I/61WFNqf8hVL._AC_UY218_.jpg'
            rating={4} />
        </div>

        <div className='home-row'>
          <Product id='12457757'
            title='Schwinn Bonafide Mountain Bike, 29-Inch Wheels, Matte Black'
            price={79.99}
            image='https://m.media-amazon.com/images/I/71tdAQayFFS._AC_UL320_.jpg'
            rating={4} />
        </div>
      </div>
    </div>
  )
}

export default Home