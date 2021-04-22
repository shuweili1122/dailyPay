import React, { useState, useEffect } from 'react';
import api from '../../Api/Api';
import AwardsContainer from './AwardsContainer';

const Ballot = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState({});

  useEffect(() => {
    api.getBallotData().then(ballotData => {
      if (!data) {
        setData(ballotData);
        setLoading(false);
      }
    });
    console.log(selection);
  });

  return (
    <div className='ballot'>
      AWARDS 2021
      {!loading &&
        <AwardsContainer data={data} loading={loading} selection={selection} setSelection={setSelection}/>
      }
    </div>
  )
}

export default Ballot;