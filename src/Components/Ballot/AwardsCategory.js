import React, { useState, useEffect } from 'react';
import AwardsCard from './AwardsCard';
import Slider from "react-slick";

const AwardsCategory = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    buttons: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='category'>
      <div className="categoryTitle">
        {props.categoryInfo.title}
      </div>
      <div className="categoryCard">
        {props.width.width <= 768 &&
          <Slider {...settings}>
            {
              props.categoryInfo.items.map((each, idx) => {
                return <AwardsCard id={each.id} cardInfo={each} cartegory={props.categoryInfo.title} selection={props.selection} setSelection={props.setSelection} />
              })
            }
          </Slider>
        }
        {props.width.width > 768 &&
          props.categoryInfo.items.map((each, idx) => {
            return <AwardsCard id={each.id} cardInfo={each} cartegory={props.categoryInfo.title} selection={props.selection} setSelection={props.setSelection} />
          })
        }
      </div>
    </div>
  )
}

export default AwardsCategory;