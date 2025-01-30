import { forwardRef, useRef } from 'react';
import { useMenuContext } from './menu-context';
import cn from '../../../../Utils/class-names';
import Popover from '../popover/popover';
import { useMergedRef } from '../popover/use-merged-ref';

export const MenuList = forwardRef(
  (
    {
      as = 'ul',
      children,
      className,
      shadow,
      size,
      rounded,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const Component = as;
    const { trigger, openDropdown, closeDropdown } = useMenuContext();
    const wrapperRef = useRef(null);

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        wrapperRef.current
          ?.querySelectorAll('[data-menu-item]:not(:disabled)')[0]
          ?.focus();
      }
    };

    const handleMouseEnter = (event) => {
      onMouseEnter?.(event);
      if (trigger === 'hover' || trigger === 'click-hover') {
        openDropdown();
      }
    };

    const handleMouseLeave = (event) => {
      onMouseLeave?.(event);
      if (trigger === 'hover' || trigger === 'click-hover') {
        closeDropdown();
      }
    };

    return (
      <Popover.Content
        as={Component}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menuList"
        ref={useMergedRef(ref, wrapperRef)}
        tabIndex={-1}
        data-menu-dropdown
        className={cn('w-48', className)}
        onKeyDown={handleKeyDown}
        shadow={shadow}
        size={size}
        rounded={rounded}
      >
        {children}
      </Popover.Content>
    );
  }
);

MenuList.displayName = 'MenuList';
