import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Timer() {
  //1800
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);

      if (timeLeft === 0) {
        clearInterval(intervalId);
        navigate('/submit');
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [timeLeft, navigate]);

  return (
    <div>
      Time Remaining: {formatTime(timeLeft)}
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default Timer;
