import { createContextHook } from "./create-custom-context";

export const [PopoverContextProvider, usePopoverContext] =
  createContextHook('Popover component was not found in the tree');
