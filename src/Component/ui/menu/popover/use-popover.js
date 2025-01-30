import { flip, inline, limitShift, offset, shift, size, useFloating } from '@floating-ui/react';
import { useUncontrolled } from '../dropdown/use-uncontrolled';
import { useFloatingAutoUpdate } from './use-floating-auto-update';

function getPopoverMiddlewares(options, getFloating) {
  const middlewares = [offset(options.offset)];

  if (options.middlewares?.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }

  if (options.middlewares?.flip) {
    middlewares.push(flip());
  }

  if (options.middlewares?.inline) {
    middlewares.push(inline());
  }

  if (options.middlewares?.size || options.width === 'target') {
    middlewares.push(
      size({
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (options.middlewares?.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`,
            });
          }

          if (options.width === 'target') {
            Object.assign(styles, {
              width: `${rects.reference.width}px`,
            });
          }
        },
      })
    );
  }

  return middlewares;
}

export function usePopover(options) {
  const [isOpened, setIsOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange,
  });

  const onClose = () => {
    if (isOpened) {
      options.onClose?.();
      setIsOpened(false);
    }
  };

  const onToggle = () => {
    if (isOpened) {
      options.onClose?.();
      setIsOpened(false);
    } else {
      options.onOpen?.();
      setIsOpened(true);
    }
  };

  const floating = useFloating({
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating),
  });

  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating,
  });

  return {
    floating,
    controlled: typeof options.opened === 'boolean',
    opened: isOpened,
    onClose,
    onToggle,
  };
}
