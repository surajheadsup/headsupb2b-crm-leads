import React, { useEffect, useState } from 'react';

const TailwindProgressBar = ({ duration = 5000, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const increment = 100 / (duration / 100); // Calculate increment for each 100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + increment;
        if (nextProgress >= 100) {
          if (onComplete && typeof onComplete === 'function') {
            const result = onComplete();
            if (result === true) {
              setCompleted(true); // Stop showing the loader if onComplete returns true
              clearInterval(interval);
            }
          }
        }
        return Math.min(nextProgress, 100);
      });
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [duration, onComplete]);

  if (completed) {
    return null; // Hide progress bar when completed is true
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default TailwindProgressBar;
