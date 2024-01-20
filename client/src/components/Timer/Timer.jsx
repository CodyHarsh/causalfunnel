// Importing necessary React components, hooks, and styles
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timer.css'

// Timer component for displaying and managing the quiz timer
function Timer() {
  // State to keep track of the time left in seconds
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // Hook to navigate to the '/submit' route when the timer reaches zero
  const navigate = useNavigate();

  useEffect(() => {
    // Set up an interval to decrement the timeLeft every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);

      // If time runs out, clear the interval and navigate to the '/submit' route
      if (timeLeft === 0) {
        clearInterval(intervalId);
        navigate('/submit');
      }
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeLeft, navigate]);

  // Render the remaining time in a div
  return (
    <div className='timer-parent-div'>
      Time Remaining: {formatTime(timeLeft)}
    </div>
  );
}

// Function to format the time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Exporting the Timer component as the default export
export default Timer;
