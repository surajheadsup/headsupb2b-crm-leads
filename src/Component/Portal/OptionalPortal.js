import React from 'react';
import { Portal } from './Portal';

export function OptionalPortal({ withinPortal = true, children, ...others }) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <>{children}</>;
}

OptionalPortal.displayName = 'OptionalPortal';
