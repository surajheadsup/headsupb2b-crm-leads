import { useRef } from 'react';
import { useUpdate } from './use-update';

/** Returns focus to last active element, used in Modal and Drawer */
export function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = useRef();

  const returnFocus = () => {
    if (
      lastActiveElement.current &&
      'focus' in lastActiveElement.current &&
      typeof lastActiveElement.current.focus === 'function'
    ) {
      lastActiveElement.current.focus({ preventScroll: true });
    }
  };

  useUpdate(() => {
    let timeout = -1;

    const clearFocusTimeout = (event) => {
      if (event.key === 'Tab') {
        window.clearTimeout(timeout);
      }
    };

    document.addEventListener('keydown', clearFocusTimeout);

    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);

  return returnFocus;
}
