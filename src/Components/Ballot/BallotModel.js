import React, { useState, useEffect } from 'react';

const BallotModel = (props) => {

  return (
    <div className={`ballotModel ${props.showModel ? '' : 'hide'}`}>
      <div className='modelContainer'>
        <div className='close' onClick={() => props.setModel(false)}>X</div>
        success!
      </div>
    </div>
  )
}

export default BallotModel;