import { useEffect, useRef } from 'react';

export function useDelayedHover({ open, close, openDelay, closeDelay }) {
  const openTimeout = useRef(-1);
  const closeTimeout = useRef(-1);

  const clearTimeouts = () => {
    window.clearTimeout(openTimeout.current);
    window.clearTimeout(closeTimeout.current);
  };

  const openDropdown = () => {
    clearTimeouts();

    if (openDelay === 0 || openDelay === undefined) {
      open();
    } else {
      openTimeout.current = window.setTimeout(open, openDelay);
    }
  };

  const closeDropdown = () => {
    clearTimeouts();

    if (closeDelay === 0 || closeDelay === undefined) {
      close();
    } else {
      closeTimeout.current = window.setTimeout(close, closeDelay);
    }
  };

  useEffect(() => clearTimeouts, []);

  return { openDropdown, closeDropdown };
}
