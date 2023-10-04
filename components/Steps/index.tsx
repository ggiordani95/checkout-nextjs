import React, { useState } from "react";
import { StepValue } from "./utils";

function useSteps() {
  const [currentStep, setCurrentStep] = useState<StepValue | number>(0);
  const [isLoadingStep, setIsLoadingStep] = useState<boolean>(false);

  function handleNextStep() {
    if (currentStep === 2) return;
    const current = currentStep;
    setIsLoadingStep(true);
    setTimeout(() => {
      setCurrentStep((prev: any) => prev + 1);
      setIsLoadingStep(false);
    }, 1200);
  }
  function handlePreviousStep() {
    if (currentStep === 0) return;
    const current = currentStep;

    setTimeout(() => {
      setCurrentStep((prev: any) => prev - 1);
    }, 600);
  }

  return { handleNextStep, currentStep, handlePreviousStep, isLoadingStep };
}

export default useSteps;
