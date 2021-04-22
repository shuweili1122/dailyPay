import React, { useEffect } from 'react';

const AwardsCard = (props) => {
  const category = props.category;

  return (
    <div className='awardsCard'>
      <div className='awardsCardTitle'>
        {props.cardInfo.title}
      </div>
      <picture>
        <img src={props.cardInfo.photoUrL} alt={props.cardInfo.title} />
      </picture>
      <div className='select'>
        <span onClick={() => {props.setSelection(prevState => ({
          ...prevState,
          [props.cartegory]: props.cardInfo.title
        }))}}>select</span>
      </div>
    </div>
  )
}

export default AwardsCard;