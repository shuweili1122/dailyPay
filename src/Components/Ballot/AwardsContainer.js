import React, { useState, useEffect } from 'react';
import AwardsCategory from './AwardsCategory';

const AwardsContainer = (props) => {

  return (
    <div className='container'>
      {props.data &&
        props.data.items.map((each, idx) => {
          return (
            <div className='categoryWrapper' key={each.id}>
              <AwardsCategory categoryInfo={each} selection={props.selection} setSelection={props.setSelection} width={props.width}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default AwardsContainer;