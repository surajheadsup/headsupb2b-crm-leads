import React, { useState } from 'react';
import { useUncontrolled } from './use-uncontrolled';
import { useDelayedHover } from './use-delay-hover';
import { useHovered } from './use-hover';
import { useUpdate } from '../popover/use-update';
import { MenuContextProvider } from './menu-context';
import Popover from '../popover/popover';
import cn from '../../../../Utils/class-names';
import { MenuTrigger } from './menu-trigger';
import { MenuList } from './menu-list';
import { MenuItem } from './menu-item';

export default function Menu({
  placement,
  offset,
  children,
  defaultOpened,
  opened,
  onChange,
  onOpen,
  onClose,
  closeItemOnClick = true,
  closeOnEscape,
  trapFocus,
  withinPortal,
  trigger = 'click',
  openDelay = 0,
  closeDelay = 100,
  closeOnClickOutside,
  clickOutsideEvents = ['mousedown', 'touchstart', 'keydown'],
  loop = true,
  id,
  menuItemTabIndex = -1,
  className,
  ...props
}) {
  const [openedViaClick, setOpenedViaClick] = useState(false);
  const [hovered, { setHovered, resetHovered }] = useHovered();

  const [isOpened, setIsOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  function close() {
    setIsOpened(false);
    setOpenedViaClick(false);
    isOpened && onClose?.();
  }

  const open = () => {
    setIsOpened(true);
    !isOpened && onOpen?.();
  };

  const toggleDropdown = () => {
    isOpened ? close() : open();
  };

  const { openDropdown, closeDropdown } = useDelayedHover({
    open,
    close,
    closeDelay,
    openDelay,
  });

  function findElement(element, selector) {
    let isElement = element;
    while (
      (isElement = isElement.parentElement) &&
      !isElement.matches(selector)
    );
    return isElement;
  }

  function getItemIndex(node) {
    if (!node) {
      return null;
    }

    return Array.from(
      findElement(node, '[data-menu-dropdown]')?.querySelectorAll(
        '[data-menu-item]'
      ) || []
    ).findIndex((element) => element === node);
  }

  useUpdate(() => {
    resetHovered();
  }, [isOpened]);

  return (
    <MenuContextProvider
      value={{
        opened: isOpened,
        toggleDropdown,
        getItemIndex,
        hovered,
        setHovered,
        openedViaClick,
        setOpenedViaClick,
        closeItemOnClick,
        closeDropdown: trigger === 'click' ? close : closeDropdown,
        openDropdown: trigger === 'click' ? open : openDropdown,
        closeDropdownImmediately: close,
        loop,
        trigger,
        menuItemTabIndex,
      }}
    >
      <Popover
        classNames={cn(className)}
        position={placement}
        opened={isOpened}
        onChange={toggleDropdown}
        defaultOpened={defaultOpened}
        closeOnEscape={closeOnEscape}
        trapFocus={trapFocus}
        offset={offset}
        {...props}
      >
        {children}
      </Popover>
    </MenuContextProvider>
  );
}

Menu.displayName = 'Menu';
Menu.Trigger = MenuTrigger;
Menu.List = MenuList;
Menu.Item = MenuItem;
