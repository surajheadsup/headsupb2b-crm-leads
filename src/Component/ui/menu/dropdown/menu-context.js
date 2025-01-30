import { createContextHook } from "../popover/create-custom-context";

export const [MenuContextProvider, useMenuContext] =
  createContextHook('Menu component was not found in the tree');
