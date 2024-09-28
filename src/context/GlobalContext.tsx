
import { type ReactNode, useState, createContext, useMemo } from 'react';

export interface GlobalContextData {
  currentHash: string;
  setCurrentHash: (value: string) => void;
}

const defaultValues = {
  currentHash: '',
  setCurrentHash: (value: string) => {
    return value;
  },
};

interface Children {
  children: ReactNode;
}
export const GlobalContext = createContext<GlobalContextData>(defaultValues);

export const GlobalProvider = ({ children }: Children) => {
  const [currentHash, setCurrentHash] = useState<string>(defaultValues.currentHash);

  const value = useMemo(
    () => ({
      currentHash,
      setCurrentHash,
    }),
    [
      currentHash,
      setCurrentHash,
    ]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
