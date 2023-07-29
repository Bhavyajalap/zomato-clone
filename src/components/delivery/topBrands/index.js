import React from 'react'
import NextArrow  from '../../common/carousal/NextArrow'
import PrevArrow from '../../common/carousal/PrevArrow';
import './topBrands.css'
import Slider from 'react-slick'
const Brands=[

    {
        id:1,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165036.png?output-format=webp"
    },
    {
        id:2,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1b51d0bca33e149302056def63fb5fa3_1536924805.png?output-format=webp"
    },
    {
        id:3,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520829.png?output-format=webp"
    },
    {
        id:4,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/407045cc3b0e1959542a25912cd99d31_1673932014.png?output-format=webp"
    },
    {
        id:5,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/e6e910553f67822ba525dbe9f515a700_1671005129.png?output-format=webp"
    },
    {
        id:6,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp"
    },
    {
        id:7,
        time:"30min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/64f933acfd78553d4e7e723defdfcf76_1568093266.png?output-format=webp"
    }
];

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const Topbrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>this is top brands.</div>
      <Slider {... settings}>
        {Brands.map((brand) =>{
            return(
                <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' 
                        alt={brand.item}/>
                        <div>{brand.time}</div>
                    </div>
                </div>
            )
        })}
      </Slider>
    </div>
  )
}

export default Topbrands
