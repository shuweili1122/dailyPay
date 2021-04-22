import React, { useState, useEffect } from 'react';

const SubmitBallot = (props) => {
  useEffect(() => {
    console.log('submitBallot',props);
  })

  return (
    <div className={`submitBallot ${Object.values(props.selection).length === 7 ? '' : 'notAllowed'}`}
      onClick={() => Object.values(props.selection).length === 7 ? props.setModel(true) : ''}>
      <span>
        submit ballot
      </span>
    </div>
  )
}

export default SubmitBallot;