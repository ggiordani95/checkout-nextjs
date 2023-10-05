"use client";

import React, { useState } from "react";
import { StepsContext } from "./useContextSteps";

export const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isValidInputs, setIsValidInputs] = useState<Object>({
    email: false,
    card: false,
    date: false,
    cvc: false,
    name: false,
    country: false,
  });

  function setterValidInputs(isValid: boolean, input: string) {
    setIsValidInputs((prevState) => ({
      ...prevState,
      [input]: isValid,
    }));
  }

  function verifyCheckoutInputs() {
    const verifyingObject = Object.values(isValidInputs).every(
      (value) => value === true
    );
    return verifyingObject;
  }

  function denyingAllInputs() {
    const allFalse = Object.keys(isValidInputs).reduce((acc: any, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setIsValidInputs(allFalse);
  }

  return (
    <StepsContext.Provider
      value={{
        setterValidInputs,
        isValidInputs,
        verifyCheckoutInputs,
        denyingAllInputs,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
