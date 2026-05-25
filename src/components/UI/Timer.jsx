import { useState, useEffect, useRef } from "react";

const countdownDisplay = (milliseconds) => {
  if (milliseconds <= 0) {
    return "Expired";
  }

  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  const secondsDisplay = Math.floor(seconds) % 60;
  const minutesDisplay = Math.floor(minutes) % 60;
  const hoursDisplay = Math.floor(hours);

  return `${hoursDisplay}h ${minutesDisplay}m ${secondsDisplay}s`;
};

/**
 * Custom hook to calculate milliseconds left until a specified expiry time.
 *
 * Source: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
 *
 * @param {number} expiryTimeMs - The expiry time in milliseconds.
 * @returns {number} The milliseconds left until the expiry time.
 */
const useMillisecondsLeft = (expiryTimeMs) => {
  const [millisecondsLeft, setMillisecondsLeft] = useState(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (timestamp) => {
    const remainingMilliseconds = Math.max(0, expiryTimeMs - Date.now());
    setMillisecondsLeft(remainingMilliseconds);

    previousTimeRef.current = timestamp;
    requestRef.current = requestAnimationFrame(animate);
  };

  // run the effect only once on mount so that the component doesn't re-render
  // every time the millisecondsLeft state changes and cause the animation to reset
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return millisecondsLeft;
};

const Timer = ({ expiryDate }) => {
  const expiryTimeMs = new Date(expiryDate).getTime();
  const millisecondsLeft = useMillisecondsLeft(expiryTimeMs);
  return (
    <div className="de_countdown">{countdownDisplay(millisecondsLeft)}</div>
  );
};

export default Timer;
