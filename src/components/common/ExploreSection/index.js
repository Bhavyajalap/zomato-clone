import React from 'react'
import ExploreCard from './exploreCard'
import './exploreSection.css'
import { restaurant } from '../../../data/restaurant'
const ExploreSection = () => {
  const list=restaurant
  
  return (
    <div className=' explore-section max-width'>
        <div className='collection-title'>
        'Delivery restaurants in banglore'
        </div>
        <div className='explore-grid' >  
        { list.map((restaurant) =>(
             <ExploreCard  restaurant={restaurant}   />
        ))}
        </div>
      this is explore section.
    </div>
  )
}

export default ExploreSection
