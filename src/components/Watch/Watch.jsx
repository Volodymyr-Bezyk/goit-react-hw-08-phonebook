import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';

import { useEffect, useState } from 'react';
import { Wrap, DateWrap, WatchWrap } from './Watch.styled';

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Wrap>
      <WatchWrap>
        <Clock size={300} value={time} />
      </WatchWrap>
    </Wrap>
  );
};

export default Watch;
