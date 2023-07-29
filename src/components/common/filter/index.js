import React from 'react'
import "./filter.css"
import FilterItem from './filteritem';

const Filters = ({filterlist}) => {
  return (
    <div className='filter'>
        {
          filterlist && 
          filterlist.map(filter =>{
            return(
              <FilterItem filter={filter} key= { filter.id}/>
            )
            
          })
        }
    </div>
  );
};

export default Filters
