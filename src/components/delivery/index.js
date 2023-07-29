import React from 'react'
import Filters from '../common/filter';
import './delivery.css';
import DeliveryCollections from './deliverycollection';
import {FaSliders} from 'react-icons/fa6'
import Topbrands from './topBrands';
import ExploreSection from '../common/ExploreSection';


const deliveryFilters =  [
    {
        id:1,
        icon:<FaSliders/>,
        title:"Filters"
    },
    {
        id:2,
        title:"rating 4.0",
    },
    {
        id:3,
        title:" safe and hygiene",
    },
    {
        id:4,
        title:"Pure Veg",
    },
    {
        id:5,
        title:"Delivery time",
    },
    {
        id:6,
        title:"great offers",
    }
];


const Delivery= () =>{
    return( 
    <div>
        <div className='max-width'>
            <Filters filterlist={deliveryFilters}/>
        </div>
        
            <DeliveryCollections/>
            <Topbrands/>
            <ExploreSection/>
    </div>
    );
}

export default Delivery;