import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my latest work! &#128525;</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='On Sale'
              path='/services'
            />
            <CardItem
              src='images/6.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Sold'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='On Sale'
              path='/services'
            />
            <CardItem
              src='images/8.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Sold'
              path='/products'
            />
            <CardItem
              src='images/7.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Sold'
              path='/sign-up'
            />
             <CardItem
              src='images/5.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='On Sale'
              path='/sign-up'
            />
             <CardItem
              src='images/4.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='On Sale'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
