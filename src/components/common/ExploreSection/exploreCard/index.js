import React from 'react';
import './exploreCard.css';
import { AiOutlineStar } from 'react-icons/ai';

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? '';
  const coverImg = restaurant?.info?.image.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cft?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisine = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = offers.length > 0 ? offers[0].text : null;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : null;

    return (
      <div className='explore-card cur-po' >
        <div className='explore-card-cover'>
              <img src={coverImg} alt={name} className='explore-card-image'/>        
              <div className='delivery-time'>{deliveryTime}</div>
              {proOff && <div className='pro-Off'>{proOff}</div>}
              {goldOff && <div className='gold-Off absolute-centre'>{goldOff}</div>}
              {discount && <div className='discount absolute-centre'>{discount}</div>}
        </div>
        <div className='res-row'>
              <div className='res-name'>
                  {name}
              </div>
              {rating && (<div className='res-rating absolute centre'>
                  {rating}
                  <div className='rating-star absolute-centre'>
                    </div>
                  </div>)}
        </div>
        <div className='res-row'>
                {cuisine && cuisine.length && 
                <div className='res-cuisine'>
                  {cuisine.map((i,item)=>{
                    return <span className='res-cuisine-tag'>
                      {item} {i!== cuisine.length - 1 && ','}
                    </span>}
                  
                  )}
                  {approxPrice && <div className='res-price'>
                    {approxPrice}
                    </div>
                  }
                  </div>}
        </div>
        {bottomContainers && bottomContainers.length > 0 && (
  <div>
    <div className='card-separator'></div>
      <div className='explore-bottom'>
        <img
          src={bottomContainers[0]?.img?.url}
          style={{ height: '18px' }}
          alt=''
        />
        <div className='res-bottom-text'>
          {bottomContainers[0]?.text}
        </div>
      </div>
    </div>
  
)}

      </div>
    
    )
  }

  export default ExploreCard;

// import React from 'react'

// const ExploreCard = () => {
//   return (
//     <div>
//       this is explore
//     </div>
//   )
// }

// export default ExploreCard
