import React, { useState, useEffect } from 'react';
import api from '../../Api/Api';
import AwardsContainer from './AwardsContainer';
import SubmitBallot from './SubmitBallot';
import BallotModel from './BallotModel';
import _ from 'lodash';

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
  });

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        console.log(123);
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", _.debounce(() => {handleResize()}, 100));
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  
  const width = useWindowSize();

  return (
    <div className='ballot'>
      AWARDS 2021
      {!loading &&
        <AwardsContainer data={data} loading={loading} selection={selection} setSelection={setSelection} width={width}/>
      }
      <SubmitBallot selection={selection} setModel={setModel} />
      <BallotModel selection={selection} showModel={showModel} setModel={setModel} />
    </div>
  )
}

export default Ballot;