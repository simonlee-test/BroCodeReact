import { useEffect, useState } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  //on mount, create an interval that update every second
  useEffect(() => {
    //setInterval(callback function, milliseconds)
    //after every second, setTime with new Date()
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //cleanup function to discard the timer if we were to unmount our component
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    //if hours % 12 === 0, return 12
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  const padZero = (num: number) => {
    return num <= 9 ? `0${num}` : num;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
