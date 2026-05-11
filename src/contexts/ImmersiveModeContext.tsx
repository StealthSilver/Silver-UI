"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ImmersiveModeContextValue = {
  isImmersive: boolean;
  setImmersive: (value: boolean) => void;
};

const ImmersiveModeContext = createContext<ImmersiveModeContextValue | null>(
  null,
);

export function ImmersiveModeProvider({ children }: { children: ReactNode }) {
  const [isImmersive, setImmersiveState] = useState(false);
  const setImmersive = useCallback((value: boolean) => {
    setImmersiveState(value);
  }, []);

  const value = useMemo(
    () => ({ isImmersive, setImmersive }),
    [isImmersive, setImmersive],
  );

  return (
    <ImmersiveModeContext.Provider value={value}>
      {children}
    </ImmersiveModeContext.Provider>
  );
}

export function useImmersiveMode(): ImmersiveModeContextValue {
  const ctx = useContext(ImmersiveModeContext);
  if (!ctx) {
    return {
      isImmersive: false,
      setImmersive: () => {},
    };
  }
  return ctx;
}
