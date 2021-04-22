import React, { useState, useEffect } from 'react';
import api from '../../Api/Api';
import AwardsContainer from './AwardsContainer';
import SubmitBallot from './SubmitBallot';
import BallotModel from './BallotModel';

const Ballot = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState({});
  const [showModel, setModel] = useState(false);

  useEffect(() => {
    api.getBallotData().then(ballotData => {
      if (!data) {
        setData(ballotData);
        setLoading(false);
      }
    });
    console.log('showMosdel???',showModel);
  });

  return (
    <div className='ballot'>
      AWARDS 2021
      {!loading &&
        <AwardsContainer data={data} loading={loading} selection={selection} setSelection={setSelection}/>
      }
      <SubmitBallot selection={selection} setModel={setModel}/>
      <BallotModel selection={selection} showModel={showModel} setModel={setModel}/>
    </div>
  )
}

export default Ballot;