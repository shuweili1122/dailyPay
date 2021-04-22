import React, { useEffect } from 'react';

const AwardsCard = (props) => {
  const handleClick = () => {
    props.setSelection(prevState => ({
      ...prevState,
      [props.cartegory]: props.cardInfo.title
    }));
  }

  return (
    <div className={`awardsCard ${props.selection[props.cartegory] ? props.selection[props.cartegory] === props.cardInfo.title ? 'selected' : '' : ''}`}>
      <div className='awardsCardTitle'>
        {props.cardInfo.title}
      </div>
      <picture>
        <img src={props.cardInfo.photoUrL} alt={props.cardInfo.title} />
      </picture>
      <div className='select'>
        <span onClick={() => {
          handleClick();
        }}>select</span>
      </div>
    </div>
  )
}

export default AwardsCard;