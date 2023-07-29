import React from 'react'
import Slider from 'react-slick'
import DeliveryItems from './deliveryitems'
import './deliveryCollections.css'
import NextArrow  from '../../common/carousal/NextArrow'
import PrevArrow from '../../common/carousal/PrevArrow';

const deliveryItems=[
  {
    id:1,
    title:"pizza",
    cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id:2,
    title:"thali",
    cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id:3,
    title:"biryani",
    cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id:4,
    title:"burger",
    cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id:5,
    title:"Sandwich",
    cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id:6,
    title:"cake",
    cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  }
];

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
      <div className='max-width'>
        <div className='collection-title'>EAT WHAT MAKES YOU HAPPY</div>
        <div className='collection-slider'>
          <Slider {...settings}>
          {deliveryItems.map((item) => (
            <div className='collection-image'>
            <DeliveryItems key={item.id} item={item} /></div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCollections;
