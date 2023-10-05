"use client";

import React, { useState } from "react";
import { StepsContext } from "./useContextSteps";

export const StepsProvider = ({ children }: any) => {
  const [isValidInputs, setIsValidInputs] = useState<boolean>(false);

  function setterValidInputs(isValid: boolean) {
    setIsValidInputs(isValid);
  }

  return (
    <StepsContext.Provider value={{ setterValidInputs, isValidInputs }}>
      {children}
    </StepsContext.Provider>
  );
};
