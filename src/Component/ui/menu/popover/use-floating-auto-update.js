import { autoUpdate } from '@floating-ui/react';
import { useEffect, useState } from 'react';
import { useUpdate } from './use-update';

export function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies,
}) {
  const [delayedUpdate, setDelayedUpdate] = useState(0);

  useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }

    return undefined;
  }, [
    opened,
    delayedUpdate,
    position,
    floating.refs.reference,
    floating.refs.floating,
    floating.update,
  ]);

  useUpdate(() => {
    floating.update();
  }, positionDependencies);

  useUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}
