import { createContext, useContext } from "react";

export const StepsContext = createContext(null as any);

export const useContextSteps = () => {
  return useContext(StepsContext);
};
