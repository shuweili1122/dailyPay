import React, {useState, useEffect } from 'react';
import AwardsCard from './AwardsCard';

const AwardsCategory = (props) => {
  
  return (
    <div className='category'>
      <div className="categoryTitle">
        {props.categoryInfo.title}
      </div>
      <div className="categoryCard">
        {
          props.categoryInfo.items.map((each, idx) => {
            return <AwardsCard id={each.id} cardInfo={each} cartegory={props.categoryInfo.title} selection={props.selection} setSelection={props.setSelection}/>
          })
        }
      </div>
    </div>
  )
}

export default AwardsCategory;