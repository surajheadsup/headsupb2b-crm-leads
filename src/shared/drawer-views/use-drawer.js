'use client';

import { atom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react';

let DrawerPlacements = 'left' | 'right' | 'top' | 'bottom';

const drawerAtom = atom({
  isOpen: false,
  view: null,
  placement: 'right',
  customSize: '320px',
});

export function useDrawer() {
  const state = useAtomValue(drawerAtom);
  const setState = useSetAtom(drawerAtom);
  const openDrawer = ({ view, placement, customSize }) => {
    setState({
      ...state,
      isOpen: true,
      view,
      placement,
      customSize,
    });
  };

  const closeDrawer = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}
