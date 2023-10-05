import { useEffect, useState } from "react";
import { StepValue } from "./utils";

function useSteps() {
  const [currentStep, setCurrentStep] = useState<StepValue | number>(0);
  const [isLoadingStep, setIsLoadingStep] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  function handleNextStep(isApproved: boolean) {
    if (currentStep === 2) return;

    if (isApproved) {
      setIsLoadingStep(true);
      setTimeout(() => {
        setCurrentStep((prevStep: number) => prevStep + 1);
        setIsLoadingStep(false);
        setIsApproved(false);
      }, 1200);
    }
  }
  function handlePreviousStep() {
    if (currentStep === 0) return;
    setIsApproved(false);
    setCurrentStep((prevStep: number) => prevStep - 1);
  }

  return {
    handleNextStep,
    currentStep,
    handlePreviousStep,
    isLoadingStep,
    isApproved,
  };
}

export default useSteps;
