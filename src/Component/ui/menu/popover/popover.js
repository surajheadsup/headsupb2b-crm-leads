import { useState, useCallback, useId } from 'react';
import { usePopover } from './use-popover';
import { useClickOutside } from './use-click-outside';
import { useDirection } from '../../../../Hooks/use-direction';
import { PopoverContextProvider } from './popover-context';
import { PopoverTrigger } from './popover-trigger';
import { PopoverContent } from './popover-content';

export default function Popover({
  classNames,
  variant,
  as = 'div',
  position = 'bottom-start',
  offset = 8,
  positionDependencies = [],
  middlewares = {
    flip: true,
    shift: true,
    inline: false,
  },
  closeOnClickOutside = true,
  withinPortal = true,
  trapFocus = false,
  withRoles = true,
  clickOutsideEvents = ['mousedown', 'touchstart'],
  onPositionChange,
  onClose,
  onOpen,
  portalProps,
  disabled,
  className,
  defaultOpened,
  keepMounted,
  opened,
  children,
  width,
  closeOnEscape = true,
  returnFocus,
  onChange,
  id,
  ...props
}) {
  const [referenceNode, setReferenceNode] = useState(null);
  const [floatingNode, setFloatingNode] = useState(null);
  const { direction } = useDirection();
  const uid = useId();

  function getFloatingPosition(dir, position) {
    if (dir === 'rtl' && (position.includes('right') || position.includes('left'))) {
      const [side, placement] = position.split('-');
      const flippedPosition = side === 'right' ? 'left' : 'right';
      return placement === undefined ? flippedPosition : `${flippedPosition}-${placement}`;
    }
    return position;
  }

  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(direction, position),
    offset: offset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
  });

  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [referenceNode, floatingNode]);

  const reference = useCallback(
    (node) => {
      setReferenceNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs]
  );

  const floating = useCallback(
    (node) => {
      setFloatingNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs]
  );

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        opened: popover.opened,
        width,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `rizzui${uid}-target`,
        getDropdownId: () => `rizzui${uid}-dropdown`,
        withRoles,
        targetProps: props,
        as,
        classNames,
        keepMounted,
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.displayName = 'Popover';
