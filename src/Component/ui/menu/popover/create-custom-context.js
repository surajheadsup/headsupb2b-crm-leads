import { createContext, useContext } from 'react';

export function createContextHook(errorMessage) {
  const Context = createContext(null);

  const useCustomContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider = ({ children, value }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useCustomContext];
}
