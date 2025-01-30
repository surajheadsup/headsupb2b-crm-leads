import React from 'react';
import { useMergedRef } from './use-merged-ref';
import cn from '../../../../Utils/class-names';
import { usePopoverContext } from './popover-context';
import { useFocusReturn } from './use-focus-return';
import { OptionalPortal } from '../../../Portal';

const noop = () => {};

export function closeOnEscape(callback, options = { active: true }) {
  if (typeof callback !== 'function' || !options.active) {
    return options.onKeyDown || noop;
  }

  return (event) => {
    if (event.key === 'Escape') {
      callback(event);
      options.onTrigger?.();
    }
  };
}

const popoverStyle = {
  base: 'absolute z-[9999] min-w-max bg-gray-0 dark:backdrop-blur-3xl border border-gray-300',
  shadow: {
    sm: 'drop-shadow-md',
    md: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
    none: 'drop-shadow-none',
  },
  size: {
    sm: 'p-2.5',
    md: 'p-4',
    lg: 'p-5',
    xl: 'p-6',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
};

export const PopoverContent = React.forwardRef(
  (
    {
      as = 'div',
      className,
      children,
      variant,
      shadow = 'md',
      size = 'sm',
      rounded = 'md',
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const Component = as;
    const ctx = usePopoverContext();

    const returnFocus = useFocusReturn({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus,
    });

    const accessibleProps = ctx.withRoles
      ? {
          'aria-labelledby': ctx.getTargetId(),
          id: ctx.getDropdownId(),
          role: 'dialog',
        }
      : {};

    const mergedRef = useMergedRef(ref, ctx.floating);

    if (ctx.disabled) {
      return null;
    }

    return (
      <OptionalPortal {...ctx.portalProps} withinPortal={ctx.withinPortal}>
        {ctx.opened && (
          <Component
            {...accessibleProps}
            {...props}
            variant={variant}
            ref={mergedRef}
            onKeyDownCapture={closeOnEscape(ctx.onClose, {
              active: ctx.closeOnEscape,
              onTrigger: returnFocus,
              onKeyDown,
            })}
            data-position={ctx.placement}
            style={{
              top: ctx.y ?? 0,
              left: ctx.x ?? 0,
              width: ctx.width === 'target' ? undefined : ctx.width,
            }}
            className={cn(
              className,
              popoverStyle.base,
              popoverStyle.shadow[shadow],
              popoverStyle.size[size],
              popoverStyle.rounded[rounded]
            )}
          >
            {children}
          </Component>
        )}
      </OptionalPortal>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
